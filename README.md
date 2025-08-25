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

目前windsurf网页grpc接口的所有.proto文件已全部逆向完毕, 见 `proto\*` 文件夹(经过了手动微调处理 确保没有语法错误), 其中 `seat_management_pb.proto` 是主要文件, 如果想要使用 `@connectrpc/connect` 系列库来发送rpc请求, 请在 `seat_management_pb.proto` 中的顶部的 `SeatManagementService` 中添加接口, 格式如下:

```protobuf
rpc 接口路由名称(接口路由名称Request) returns (接口路由名称Response);
```

例如网页上的接口完整url为:
https://web-backend.windsurf.com/exa.seat_management_pb.SeatManagementService/GetCurrentUser

那么写成这样:

```protobuf
service SeatManagementService {
	rpc GetCurrentUser(GetCurrentUserRequest) returns (GetCurrentUserResponse);
}
```

其中 `GetCurrentUserRequest` 是请求参数message, `GetCurrentUserResponse` 是响应参数message, 它们都是snake case命名方式, 经过`@bufbuild/protobuf`包装后, 最终接口的json数据会变成小驼峰命名

每次修改.proto文件, 都有运行一次 `npm run generate` , 确保生成了最新的ts代码

`script\pbs.js` 中有逆向的原始数据, 是在windowsurf网页源代码中经过push和转换生成的数据, 涵盖所有message和enum, 如需原始.proto文件, 可执行命令:

```bash
npm run reverse
```

生成的.proto 数据路径: `script\proto-output\*`, 若要使用proto文件请放入 `proto` 文件夹

**生成工具已做到:**

- 自动提取package并归类为不同proto文件
- 自动提取messageName/enumNum
- name与no匹配
- T值还原type(参考下方**proto type 与 T 值对照表**)
- repeated、optional、packed语法处理
- oneof归类
- 同文件message/enum引用时省略完整包名(已处理大部分, 少部分需手动处理, 不处理其实也不会报错)

**生成工具未做到:**

- 跨proto文件引用时自动import引入

由于生成工具写的不够完美, 无法完全保证.proto文件的语法正确性, 请在运行 `npm run generate` 根据终端报错提示手动微调.proto文件

目前暂未做到自动import, 例如**跨proto文件引入**和**google.protobuf引入**, 请在proto文件全局搜索`exa.`、`google.protobuf`等关键词, 如果存在, 请手动在页面上方加入import, 例如

```protobuf
import "google/protobuf/timestamp.proto";
import "codeium_common_pb.proto";
```

同文件message引用可以省略package(跨proto需要写完整), 目前生成工具也没有完全处理好, 如果导致 `npm run generate` 错误, 可以手动全局搜索并删除包名, 例如在 `seat_management_pb.proto` 文件中搜索到了多条 `exa.seat_management_pb` 引用记录, 可以手动删掉这个前缀, 只保留message名称: 

```protobuf
修改前:
message GetPreapprovalForUserResponse {
  exa.seat_management_pb.PreapprovedUser preapproval = 1;
  string admin_name = 2;
  string team_name = 3;
}
修改后:
message GetPreapprovalForUserResponse {
  PreapprovedUser preapproval = 1;
  string admin_name = 2;
  string team_name = 3;
}
```

不报错也可以不用改

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
