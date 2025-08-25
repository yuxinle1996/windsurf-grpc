/** 浏览器中提取messages和enums */

window = {};
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

// 重写proto3.util.setEnumType
var tempFunc = proto3.util.setEnumType;
proto3.util.setEnumType = (a, b, c, d) => {
  window.enums = window.enums || [];
  window.enums.push({
    typeName: b,
    values: c,
  });
  tempFunc(a, b, c, d);
};

function getMessages() {
  var pb = [];

  // var a = t(35165),
  //   r = t(46238),
  //   i = t(4577),
  //   s = t(2750);

  for (const item of Object.keys(r)) {
    const typeName = r[item].typeName;
    if (typeName) {
      pb.push({
        typeName,
        cls: r[item],
      });
    }
  }
  for (const item of Object.keys(i)) {
    const typeName = i[item].typeName;
    if (typeName) {
      pb.push({
        typeName,
        cls: i[item],
      });
    }
  }
  for (const item of Object.keys(a)) {
    const typeName = a[item].typeName;
    if (typeName) {
      pb.push({
        typeName,
        cls: a[item],
      });
    }
  }
  for (const item of Object.keys(s)) {
    const typeName = s[item].typeName;
    if (typeName) {
      pb.push({
        typeName,
        cls: s[item],
      });
    }
  }
  return pb;
}

/**
 * 浏览器中使用
 * @param messages
 * @param enums
 * @returns 带fields的messages
 */
function handleMessages(messages) {
  const newMessages = [];
  for (const message of messages) {
    const typeParts = message.typeName.split(".");
    const typeName =
      typeParts.slice(0, 2).join(".") + "." + typeParts.slice(-1)[0];
    const packageName = typeParts.slice(0, 2).join(".");
    const fields = message.cls.fields._fields().map((field) => {
      let type = "";
      switch (field.kind) {
        case "scalar":
          type = SCALAR_TYPE_MAP[field.T] || `unknown_scalar_${field.T}`;
          break;
        case "enum": {
          const parts = field.T.typeName.split(".");
          const typeName =
            parts.slice(0, 2).join(".") + "." + parts.slice(-1)[0];
          type =
            packageName === parts.slice(0, 2).join(".")
              ? parts.slice(-1)[0]
              : typeName;
          break;
        }
        case "message":
          const parts = field.T.typeName.split(".");
          const typeName =
            parts.slice(0, 2).join(".") + "." + parts.slice(-1)[0];
          type =
            packageName === parts.slice(0, 2).join(".")
              ? parts.slice(-1)[0]
              : typeName;
          if (
            messages.every(
              (item) =>
                item.typeName.split(".").slice(0, 2).join(".") +
                  "." +
                  item.typeName.split(".").slice(-1)[0] !==
                typeName
            )
          ) {
            messages.push({
              typeName,
              cls: field.T,
            });
          }
          break;
        case "map": {
          switch (field.V.kind) {
            case "scalar":
              type = `map<${SCALAR_TYPE_MAP[field.K]}, ${
                SCALAR_TYPE_MAP[field.V.T] || `unknown_scalar_${field.V.T}`
              }>`;
              break;
            case "enum": {
              const mapParts = field.V.T.typeName.split(".");
              const typeName =
                mapParts.slice(0, 2).join(".") + "." + mapParts.slice(-1)[0];
              type = `map<${SCALAR_TYPE_MAP[field.K]}, ${
                packageName === mapParts.slice(0, 2).join(".")
                  ? mapParts.slice(-1)[0]
                  : typeName
              }>`;
              break;
            }
            case "message": {
              const mapParts = field.V.T.typeName.split(".");
              const typeName =
                mapParts.slice(0, 2).join(".") + "." + mapParts.slice(-1)[0];
              type = `map<${SCALAR_TYPE_MAP[field.K]}, ${
                packageName === mapParts.slice(0, 2).join(".")
                  ? mapParts.slice(-1)[0]
                  : typeName
              }>`;
              if (
                messages.every(
                  (item) =>
                    item.typeName.split(".").slice(0, 2).join(".") +
                      "." +
                      item.typeName.split(".").slice(-1)[0] !==
                    typeName
                )
              ) {
                messages.push({
                  typeName,
                  cls: field.V.T,
                });
              }
              break;
            }
            default:
              type = `map<${SCALAR_TYPE_MAP[field.K]}, ${field.V.kind}>`;
          }
          break;
        }
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
        jsonName: field.jsonName,
      };
    });
    newMessages.push({
      typeName,
      fields,
    });
  }
  return newMessages;
}

function main() {
  const messages = getMessages();
  const newMessages = handleMessages(messages);
  const pb = [...newMessages, ...window.enums];
  console.log(pb);
}

main();
