# Windsurf gRPC

## 流程

### 1. 定义 proto 文件

例如 `proto\seat_management_pb.proto`

### 2.生成 ECMAScript 类

运行 `npm run generate` 在 `src/gen` 文件夹中生成**\_pb**和**\_connect**文件

其中**connect**文件用于 grpc 库`@connectrpc/connect`使用, 普通 axios 请求无需**connect**文件, 而是直接序列化后 发送请求

### 3.运行

```bash
npm run build

# src/index 主要使用@connectrpc/connect和@connectrpc/connect-web
# Connect 是用于构建浏览器和 gRPC 兼容 HTTP API 的一系列库
npm run start

# axios请求测试
# 1. 将请求参数通过toBinary()转成二进制数据
# 2. 发送application/proto请求
# 3. 得到二进制响应数据后使用fromBinary()反序列化得到原始数据

# 测试接口 https://web-backend.windsurf.com/exa.seat_management_pb.SeatManagementService/UserSSOLoginRedirect
npm run axios-test1

# 测试接口 https://web-backend.windsurf.com/exa.seat_management_pb.SeatManagementService/GetCurrentUser
npm run axios-test2

# axios+protobuf封装
npm run axios-advanced
```

## 4.windsurf proto 逆向

```bash
npm run reverse
```

webpack 压缩数据: `script\webpack-code\proto_fields.js`

生成的.proto 数据: `script\proto-output\*`

ps: 字段太多, 工具无法完全还原, 仅供参考, 遇到 message、enum、map、oneof 时请自行修改

### proto type 与 T 值对照表

| .proto Type | TypeScript 对应类型 (生成代码)    | T 的值 (在 `newFieldList` 中) | 说明                                                                                          |
| :---------- | :-------------------------------- | :---------------------------- | :-------------------------------------------------------------------------------------------- |
| `double`    | `number`                          | `1` (ScalarType.DOUBLE)       | 双精度浮点数                                                                                  |
| `float`     | `number`                          | `2` (ScalarType.FLOAT)        | 单精度浮点数                                                                                  |
| `int64`     | `bigint` 或 `string` (取决于配置) | `3` (ScalarType.INT64)        | 变长编码，对负数效率低。适合字段值是非负数的场景。JS 中数字太大，常用`string`或`bigint`表示。 |
| `uint64`    | `bigint` 或 `string` (取决于配置) | `4` (ScalarType.UINT64)       | 无符号 64 位整数                                                                              |
| `int32`     | `number`                          | `5` (ScalarType.INT32)        | 变长编码，对负数效率低。适合字段值是非负数的场景。                                            |
| `fixed64`   | `bigint` 或 `string` (取决于配置) | `6` (ScalarType.FIXED64)      | 固定 8 字节。如果值经常大于 2^56，比 uint64 效率更高。                                        |
| `fixed32`   | `number`                          | `7` (ScalarType.FIXED32)      | 固定 4 字节。如果值经常大于 2^28，比 uint32 效率更高。                                        |
| `bool`      | `boolean`                         | `8` (ScalarType.BOOL)         | 布尔值                                                                                        |
| `string`    | `string`                          | `9` (ScalarType.STRING)       | UTF-8 编码或 7-bit ASCII 文本。                                                               |
| `bytes`     | `Uint8Array`                      | `12` (ScalarType.BYTES)       | 任意字节序列。                                                                                |
| `uint32`    | `number`                          | `13` (ScalarType.UINT32)      | 无符号 32 位整数                                                                              |
| `sfixed32`  | `number`                          | `15` (ScalarType.SFIXED32)    | 固定 4 字节。                                                                                 |
| `sfixed64`  | `bigint` 或 `string` (取决于配置) | `16` (ScalarType.SFIXED64)    | 固定 8 字节。                                                                                 |
| `sint32`    | `number`                          | `17` (ScalarType.SINT32)      | 变长编码，对负数编码效率高。适合字段值可能为负数的场景。                                      |
| `sint64`    | `bigint` 或 `string` (取决于配置) | `18` (ScalarType.SINT64)      | 变长编码，对负数编码效率高。                                                                  |
