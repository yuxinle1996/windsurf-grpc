/**
 * 提取protobuf消息和枚举
 * @param {Array} pbs
 * @returns {Object} 包含消息和枚举的数组, 枚举已经过去重
 */
function extractProtobufMessages(pbs) {
  const messages = [];
  const enumMap = new Map();
  for (const pb of pbs) {
    const typeParts = pb.typeName.split(".");
    // exa.seat_management_pb.GetTeamActivityResponse.UserActivity -> exa.seat_management_pb.UserActivity
    const typeName =
      typeParts.slice(0, 2).join(".") + "." + typeParts.slice(-1)[0];
    if (pb.fields) {
      messages.push({
        typeName,
        fields: pb.fields.sort((a, b) => a.no - b.no),
      });
    } else if (!enumMap.has(typeName)) {
      enumMap.set(typeName, {
        typeName,
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
      const packageName = parts.slice(0, 2).join(".");
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
      const packageName = parts.slice(0, 2).join(".");
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

  const importMessages = messages.flatMap((message) =>
    message.fields.filter((field) => field.type.includes("."))
  );
  // 生成import
  if (importMessages.length > 0) {
    const importMap = new Map();
    for (const message of importMessages) {
      let type = message.type;
      if (type.startsWith("map<")) {
        type = type.split(", ")[1].replace(">", "");
      }
      const parts = type.split(".");
      const start = parts.slice(0, 2).join("/");
      const end = parts.slice(-1)[0].toLowerCase();
      if (!importMap.has(start)) {
        if (start === "google/protobuf") {
          importMap.set(start + "/" + end + ".proto");
        } else {
          importMap.set(parts[1] + ".proto");
        }
      }
    }

    importMap.forEach((_, packageStr) => {
      proto += `import "${packageStr}";\n`;
    });

    proto += "\n";
  }

  // 生成消息定义
  messages.forEach((message) => {
    const messageName = message.typeName.split(".").slice(-1)[0];
    proto += `message ${messageName} {\n`;
    // 区分oneof
    const oneofFields = message.fields.filter((field) => field.oneof);
    const otherFields = message.fields.filter((field) => !field.oneof);
    // 无oneof字段
    otherFields.forEach((field) => {
      const repeated = field.repeated ? "repeated " : "";
      const optional = field.optional ? "optional " : "";
      const packed = field.packed ? " [packed = true] " : "";
      const jsonName = field.jsonName
        ? ` [json_name = "${field.jsonName}"]`
        : "";
      proto += `  ${repeated}${optional}${field.type} ${field.name} = ${
        field.no
      }${packed || jsonName};\n`;
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
        const jsonName = field.jsonName
          ? ` [json_name = "${field.jsonName}"]`
          : "";
        proto += `    ${repeated}${optional}${field.type} ${field.name} = ${
          field.no
        }${packed || jsonName};\n`;
      });
      proto += "  }\n";
    });

    proto += "}\n\n";
  });

  // 生成枚举定义
  enums.forEach((enumDef) => {
    const enumName = enumDef.typeName.split(".").slice(-1)[0];
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
  if (args.length < 1) {
    console.log("用法: node proto-reverse-engineer.js <output-directory>");
    console.log("示例: node proto-reverse-engineer.js ./proto-output/");
    process.exit(1);
  }

  const [outputDir] = args;
  reverseEngineerProto(outputDir);
}
