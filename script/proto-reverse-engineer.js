const SCALAR_TYPE_MAP = {
  1: "double",
  2: "float",
  3: "int64",
  4: "uint64",
  5: "int32",
  6: "fixed64",
  7: "fixed32",
  8: "bool",
  9: "string",
  // 10: "group",
  // 11: "message",
  12: "bytes",
  13: "uint32",
  // 14: "enum",
  15: "sfixed32",
  16: "sfixed64",
  17: "sint32",
  18: "sint64",
};

/**
 * 浏览器中使用
 * @param messages
 * @param enums
 * @returns 带fields的messages
 */
function handleMessages(messages) {
  const newMessages = [];
  for (const message of messages) {
    const typeName = message.typeName;
    const packageName = typeName.split(".").slice(0, -1).join(".");
    const fields = message.cls.fields._fields().map((field) => {
      let type = "";
      switch (field.kind) {
        case "scalar":
          type = SCALAR_TYPE_MAP[field.T] || `unknown_scalar_${field.T}`;
          break;
        case "enum":
          type =
            packageName === field.T.typeName.split(".").slice(0, -1).join(".")
              ? field.T.typeName.split(".").pop()
              : field.T.typeName;
          break;
        case "message":
          type =
            packageName === field.T.typeName.split(".").slice(0, -1).join(".")
              ? field.T.typeName.split(".").pop()
              : field.T.typeName;
          if (messages.every((item) => item.typeName !== field.T.typeName)) {
            messages.push({
              typeName: field.T.typeName,
              cls: field.T,
            });
          }
          break;
        case "map":
          switch (field.V.kind) {
            case "scalar":
              type = `map<${SCALAR_TYPE_MAP[field.K]}, ${
                SCALAR_TYPE_MAP[field.V.T] || `unknown_scalar_${field.V.T}`
              }>`;
              break;
            case "enum":
              type = `map<${SCALAR_TYPE_MAP[field.K]}, ${
                packageName ===
                field.V.T.typeName.split(".").slice(0, -1).join(".")
                  ? field.V.T.typeName.split(".").pop()
                  : field.V.T.typeName
              }>`;
              break;
            case "message":
              type = `map<${SCALAR_TYPE_MAP[field.K]}, ${
                packageName ===
                field.V.T.typeName.split(".").slice(0, -1).join(".")
                  ? field.V.T.typeName.split(".").pop()
                  : field.V.T.typeName
              }>`;
              if (
                messages.every((item) => item.typeName !== field.V.T.typeName)
              ) {
                messages.push({
                  typeName: field.V.T.typeName,
                  cls: field.V.T,
                });
              }
              break;
            default:
              type = `map<${SCALAR_TYPE_MAP[field.K]}, ${field.V.kind}>`;
          }
          break;
        default:
          type = field.kind;
      }
      return {
        no: field.no,
        name: field.name,
        type,
        repeated: !!field.repeated,
        optional: !!field.opt,
        packed: !!field.packed,
        oneof: field.oneof,
      };
    });
    newMessages.push({
      typeName,
      fields,
    });
  }
  return newMessages;
}

/**
 * 提取protobuf消息和枚举
 * @param {Array} pbs
 * @returns {Object} 包含消息和枚举的数组
 */
function extractProtobufMessages(pbs) {
  const messages = [];
  const enumMap = new Map();
  for (const pb of pbs) {
    if (pb.fields) {
      messages.push({
        typeName: pb.typeName,
        fields: pb.fields.sort((a, b) => a.no - b.no),
      });
    } else if (!enumMap.has(pb.typeName)) {
      enumMap.set(pb.typeName, {
        typeName: pb.typeName,
        values: pb.values.sort((a, b) => a.no - b.no),
      });
    }
  }
  return { messages, enums: Array.from(enumMap.values()) };
}

/**
 * 按包名分组消息和枚举
 * @param {Array} messages
 * @param {Array} enums
 * @returns {Map} 按包名分组的数据
 */
function groupByPackage(messages, enums) {
  const packageMap = new Map();
  for (const message of messages) {
    const parts = message.typeName.split(".");
    if (parts.length >= 3) {
      // exa.codeium_common_pb.CompletionsRequest -> exa.codeium_common_pb
      const packageName = parts.slice(0, -1).join(".");
      const fileName = parts[1]; // codeium_common_pb

      if (!packageMap.has(fileName)) {
        packageMap.set(fileName, {
          packageName: packageName,
          messages: [],
          enums: [],
        });
      }
      packageMap.get(fileName).messages.push(message);
    }
  }
  for (const enumDef of enums) {
    const parts = enumDef.typeName.split(".");
    if (parts.length >= 3) {
      const packageName = parts.slice(0, -1).join(".");
      const fileName = parts[1];
      if (!packageMap.has(fileName)) {
        packageMap.set(fileName, {
          packageName: packageName,
          messages: [],
          enums: [],
        });
      }
      packageMap.get(fileName).enums.push(enumDef);
    }
  }
  return packageMap;
}

/**
 * 生成单个 .proto 文件内容
 * @param {Array} messages
 * @param {Array} enums
 * @param {string} packageName
 * @returns {string}
 */
function generateSingleProtoFile(messages, enums, packageName) {
  let proto = 'syntax = "proto3";\n\n';
  proto += `package ${packageName};\n\n`;

  // 生成消息定义
  messages.forEach((message) => {
    const messageName = message.typeName.split(".").pop();
    proto += `message ${messageName} {\n`;
    // 区分oneof
    const oneofFields = message.fields.filter((field) => field.oneof);
    const otherFields = message.fields.filter((field) => !field.oneof);
    // 无oneof字段
    otherFields.forEach((field) => {
      const repeated = field.repeated ? "repeated " : "";
      const optional = field.optional ? "optional " : "";
      const packed = field.packed ? " [packed = true] " : "";
      proto += `  ${repeated}${optional}${field.type} ${field.name} = ${field.no}${packed};\n`;
    });

    // oneof按名称分组
    const oneofMap = new Map();
    oneofFields.forEach((field) => {
      const oneofName = field.oneof;
      if (!oneofMap.has(oneofName)) {
        oneofMap.set(oneofName, []);
      }
      oneofMap.get(oneofName).push(field);
    });
    oneofMap.forEach((fields, oneofName) => {
      proto += `  oneof ${oneofName} {\n`;
      fields.forEach((field) => {
        const repeated = field.repeated ? "repeated " : "";
        const optional = field.optional ? "optional " : "";
        const packed = field.packed ? " [packed = true] " : "";
        proto += `    ${repeated}${optional}${field.type} ${field.name} = ${field.no}${packed};\n`;
      });
      proto += "  }\n";
    });

    proto += "}\n\n";
  });

  // 生成枚举定义
  enums.forEach((enumDef) => {
    const enumName = enumDef.typeName.split(".").pop();
    proto += `enum ${enumName} {\n`;

    enumDef.values.forEach((value) => {
      proto += `  ${value.name} = ${value.no};\n`;
    });

    proto += "}\n\n";
  });

  return proto;
}

function reverseEngineerProto(outputDir) {
  const fs = require("fs");
  const path = require("path");
  const { pbs } = require("./pbs.js");

  const { messages, enums } = extractProtobufMessages(pbs);
  const packageGroups = groupByPackage(messages, enums);
  console.log(`分组为 ${packageGroups.size} 个不同的包:`);
  packageGroups.forEach((group, fileName) => {
    console.log(
      `  - ${fileName}.proto: ${group.messages.length} 个消息, ${group.enums.length} 个枚举`
    );
  });

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  console.log(`\n生成 .proto 文件到目录: ${outputDir}`);

  packageGroups.forEach((group, fileName) => {
    const protoContent = generateSingleProtoFile(
      group.messages,
      group.enums,
      group.packageName
    );

    const outputPath = path.join(outputDir, `${fileName}.proto`);
    fs.writeFileSync(outputPath, protoContent);

    console.log(
      `  ✓ 已生成: ${fileName}.proto (${group.messages.length} 消息, ${group.enums.length} 枚举)`
    );
  });
}

// 如果直接运行此脚本
if (require.main === module) {
  const args = process.argv.slice(2);
  console.log(args);
  if (args.length < 1) {
    console.log("用法: node proto-reverse-engineer.js <output-directory>");
    console.log("示例: node proto-reverse-engineer.js ./proto-output/");
    process.exit(1);
  }

  const [outputDir] = args;
  reverseEngineerProto(outputDir);
}
