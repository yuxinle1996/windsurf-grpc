/**
 * - URL: https://web-backend.windsurf.com/exa.seat_management_pb.SeatManagementService/GetCurrentUser
 * - Method: POST
 * - Content-Type: application/proto
 */

import axios from "axios";
import {
  RegisterUserRequest,
  RegisterUserResponse,
} from "../gen/seat_management_pb_pb";

const webToken = "xxx";

async function sendAxiosProtobufRequest() {
  try {
    const requestMessage = new RegisterUserRequest({
      firebaseIdToken: webToken,
    });
    // 序列化请求数据
    const binaryData = requestMessage.toBinary();
    const response = await axios({
      method: "POST",
      url: "https://web-backend.windsurf.com/exa.seat_management_pb.SeatManagementService/RegisterUser",
      data: binaryData,
      headers: {
        "Content-Type": "application/proto",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
        "X-Auth-Token": webToken,
      },
      responseType: "arraybuffer",
    });
    console.log("状态码:", response.status);
    // 反序列化响应数据
    const responseData = new Uint8Array(response.data);
    const responseMessage = RegisterUserResponse.fromBinary(responseData);
    console.log(responseMessage);

    return responseMessage;
  } catch (error) {
    console.error("❌ 请求失败:", (error as Error).message);
  }
}

sendAxiosProtobufRequest();
