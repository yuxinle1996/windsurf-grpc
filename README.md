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

目前 windsurf 网页 grpc 接口的所有.proto 文件已全部逆向完毕, 见 `proto\*` 文件夹(经过了手动微调处理 确保没有语法错误), 其中 `seat_management_pb.proto` 是主要文件, 如果想要使用 `@connectrpc/connect` 系列库来发送 rpc 请求, 请在 `seat_management_pb.proto` 中的顶部的 `SeatManagementService` 中添加接口, 格式如下:

```protobuf
rpc 接口路由名称(接口路由名称Request) returns (接口路由名称Response);
```

例如网页上的接口完整 url 为:
https://web-backend.windsurf.com/exa.seat_management_pb.SeatManagementService/GetCurrentUser

那么写成这样:

```protobuf
service SeatManagementService {
	rpc GetCurrentUser(GetCurrentUserRequest) returns (GetCurrentUserResponse);
}
```

其中 `GetCurrentUserRequest` 是请求参数 message, `GetCurrentUserResponse` 是响应参数 message, 它们都是 snake_case 命名方式, 经过 `@bufbuild/protobuf` 包装后, 所有字段默认会变成小驼峰命名, 除非手动指定了 `[json_name = "xxx"]`

每次修改.proto 文件, 都要运行一次 `npm run generate` , 确保生成了最新的 ts 代码

`script\pbs.js` 中有逆向的原始数据, 是在 windowsurf 网页源代码中经过 push 和转换生成的数据, 涵盖所有 message 和 enum, 如需原始.proto 文件, 可执行命令:

```bash
npm run reverse
```

生成的.proto 数据路径: `script\proto-output\*`, 若要使用 proto 文件请放入 `proto` 文件夹

**生成工具目前已做到:**

- 自动提取 package 并归类为不同 proto 文件
- 自动提取 messageName/enumNum
- name 与 no 匹配
- T 值还原 type(参考下方**proto type 与 T 值对照表**)
- repeated、optional、packed、json_name 语法处理
- oneof 归类
- 同文件 message/enum 引用时省略完整包名
- 跨 proto 文件引用时自动生成 import

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
