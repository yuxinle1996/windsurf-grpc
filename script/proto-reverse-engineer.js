/**
 * Protobuf 反向工程工具
 * 从混淆的 protobuf JavaScript 代码中提取 .proto 文件定义
 */

// protobuf 标量类型映射
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
 * 从混淆的 JS 代码中提取 protobuf 消息定义
 * @param {string} jsCode
 * @returns {Object} 包含消息和枚举的对象
 */
function extractProtobufMessages(jsCode) {
  const messages = [];
  const enums = [];

  // 更灵活的模式匹配，适应混淆代码
  // 匹配赋值给 typeName 的模式，如: (tr.typeName = "exa.codeium_common_pb.CompletionsRequest")
  const typeNameRegex = /\([^)]+\.typeName\s*=\s*["`']([^"`']+)["`']\)/g;

  // 匹配字段定义的模式，更宽松的匹配
  const fieldsRegex =
    /\([^)]+\.fields\s*=\s*[^(]+\.newFieldList\s*\(\s*\(\)\s*=>\s*\[([\s\S]*?)\]\)/g;

  // 匹配枚举定义的模式，如: util.setEnumType(eF, "exa.codeium_common_pb.ProviderSource", [...])
  const enumRegex =
    /util\.setEnumType\s*\([^,]+,\s*["`']([^"`']+)["`']\s*,\s*\[([\s\S]*?)\]\)/g;

  let typeNameMatch;
  const typeNames = [];

  // 提取所有类型名
  while ((typeNameMatch = typeNameRegex.exec(jsCode)) !== null) {
    typeNames.push({
      typeName: typeNameMatch[1],
      index: typeNameMatch.index,
    });
  }

  console.log(`找到 ${typeNames.length} 个消息类型名定义`);

  let fieldsMatch;
  const fieldDefinitions = [];

  // 提取所有字段定义
  while ((fieldsMatch = fieldsRegex.exec(jsCode)) !== null) {
    fieldDefinitions.push({
      fields: fieldsMatch[1],
      index: fieldsMatch.index,
    });
  }

  console.log(`找到 ${fieldDefinitions.length} 个字段定义`);

  // 提取枚举定义
  let enumMatch;
  while ((enumMatch = enumRegex.exec(jsCode)) !== null) {
    const enumName = enumMatch[1];
    const enumValuesStr = enumMatch[2];
    const enumValues = parseEnumValues(enumValuesStr);

    enums.push({
      typeName: enumName,
      values: enumValues,
    });
  }

  console.log(`找到 ${enums.length} 个枚举定义`);

  // 将类型名和字段定义配对
  for (let i = 0; i < typeNames.length; i++) {
    const typeName = typeNames[i];

    // 找到最近的字段定义
    let closestField = null;
    let minDistance = Infinity;

    for (const field of fieldDefinitions) {
      const distance = Math.abs(field.index - typeName.index);
      if (distance < minDistance && distance < 1000) {
        // 限制在合理范围内
        minDistance = distance;
        closestField = field;
      }
    }

    if (closestField) {
      const fields = parseFields(closestField.fields);
      messages.push({
        typeName: typeName.typeName,
        fields: fields,
      });
    }
  }

  return { messages, enums };
}

/**
 * 解析字段定义字符串
 * @param {string} fieldsStr
 * @returns {Array} 字段数组
 */
function parseFields(fieldsStr) {
  const fields = [];

  // 匹配每个字段对象 {no: ..., name: ..., kind: ..., T: ...}
  const fieldRegex =
    /\{\s*no:\s*(\d+)\s*,\s*name:\s*["`']([^"`']+)["`']\s*,\s*kind:\s*["`']([^"`']+)["`']\s*(?:,\s*T:\s*([^,}]+))?\s*(?:,\s*repeated:\s*([^,}]+))?\s*[^}]*\}/g;

  let fieldMatch;
  while ((fieldMatch = fieldRegex.exec(fieldsStr)) !== null) {
    const [, no, name, kind, type, repeated] = fieldMatch;

    let fieldType;
    if (kind === "scalar") {
      const scalarTypeNum = parseInt(type);
      fieldType = SCALAR_TYPE_MAP[scalarTypeNum] || `unknown_scalar_${type}`;
    } else if (kind === "message") {
      // 对于消息类型，保留原始变量名，后面会进行类型推断
      fieldType = `${type}`;
    } else if (kind === "enum") {
      fieldType = `${type}_enum`;
    } else {
      fieldType = kind;
    }

    fields.push({
      number: parseInt(no),
      name: name,
      type: fieldType,
      repeated: repeated === "!0" || repeated === "true",
    });
  }

  return fields.sort((a, b) => a.number - b.number);
}

/**
 * 解析枚举值定义字符串
 * @param {string} enumValuesStr
 * @returns {Array} 枚举值数组
 */
function parseEnumValues(enumValuesStr) {
  const values = [];

  // 匹配枚举值对象 {no: ..., name: "..."}
  const enumValueRegex =
    /\{\s*no:\s*(\d+)\s*,\s*name:\s*["`']([^"`']+)["`']\s*[^}]*\}/g;

  let valueMatch;
  while ((valueMatch = enumValueRegex.exec(enumValuesStr)) !== null) {
    const [, no, name] = valueMatch;

    values.push({
      number: parseInt(no),
      name: name,
    });
  }

  return values.sort((a, b) => a.number - b.number);
}

/**
 * 按包名分组消息和枚举
 * @param {Array} messages
 * @param {Array} enums
 * @returns {Map} 按包名分组的数据
 */
function groupByPackage(messages, enums) {
  const packageMap = new Map();

  // 分组消息
  messages.forEach((message) => {
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
  });

  // 分组枚举
  enums.forEach((enumDef) => {
    const parts = enumDef.typeName.split(".");
    if (parts.length >= 3) {
      // exa.codeium_common_pb.ProviderSource -> exa.codeium_common_pb
      const packageName = parts.slice(0, -1).join(".");
      const fileName = parts[1]; // codeium_common_pb

      if (!packageMap.has(fileName)) {
        packageMap.set(fileName, {
          packageName: packageName,
          messages: [],
          enums: [],
        });
      }

      packageMap.get(fileName).enums.push(enumDef);
    }
  });

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

  // 生成枚举定义
  enums.forEach((enumDef) => {
    const enumName = enumDef.typeName.split(".").pop();
    proto += `enum ${enumName} {\n`;

    enumDef.values.forEach((value) => {
      proto += `  ${value.name} = ${value.number};\n`;
    });

    proto += "}\n\n";
  });

  // 生成消息定义
  messages.forEach((message) => {
    const messageName = message.typeName.split(".").pop();
    proto += `message ${messageName} {\n`;

    message.fields.forEach((field) => {
      const repeated = field.repeated ? "repeated " : "";
      proto += `  ${repeated}${field.type} ${field.name} = ${field.number};\n`;
    });

    proto += "}\n\n";
  });

  return proto;
}

/**
 * 主函数：从 JS 文件提取并生成 proto 文件
 * @param {string} jsFilePath
 * @param {string} outputDir
 */
function reverseEngineerProto(jsFilePath, outputDir) {
  const fs = require("fs");
  const path = require("path");

  console.log("读取 JavaScript 文件...");
  const jsCode = fs.readFileSync(jsFilePath, "utf8");

  console.log("提取 protobuf 定义...");
  const { messages, enums } = extractProtobufMessages(jsCode);

  console.log(`找到 ${messages.length} 个消息定义:`);
  messages.forEach((msg) => {
    console.log(`  - ${msg.typeName} (${msg.fields.length} 个字段)`);
  });

  console.log(`\n找到 ${enums.length} 个枚举定义:`);
  enums.forEach((enumDef) => {
    console.log(`  - ${enumDef.typeName} (${enumDef.values.length} 个值)`);
  });

  console.log("\n按包名分组...");
  const packageGroups = groupByPackage(messages, enums);

  console.log(`分组为 ${packageGroups.size} 个不同的包:`);
  packageGroups.forEach((group, fileName) => {
    console.log(
      `  - ${fileName}.proto: ${group.messages.length} 个消息, ${group.enums.length} 个枚举`
    );
  });

  // 确保输出目录存在
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`\n生成 .proto 文件到目录: ${outputDir}`);
  const generatedFiles = [];

  // 为每个包生成单独的 .proto 文件
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
    generatedFiles.push(outputPath);
  });

  console.log(`\n总共生成了 ${generatedFiles.length} 个 .proto 文件`);

  return generatedFiles;
}

// 如果直接运行此脚本
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.log(
      "用法: node proto-reverse-engineer.js <input.js> <output-directory>"
    );
    console.log(
      "示例: node proto-reverse-engineer.js example_fields.js ./proto-output/"
    );
    process.exit(1);
  }

  const [inputFile, outputDir] = args;
  reverseEngineerProto(inputFile, outputDir);
}

module.exports = {
  extractProtobufMessages,
  parseFields,
  parseEnumValues,
  groupByPackage,
  generateSingleProtoFile,
  reverseEngineerProto,
};
