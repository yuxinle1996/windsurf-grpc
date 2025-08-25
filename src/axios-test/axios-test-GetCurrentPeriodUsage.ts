/**
 * - URL: https://api2.cursor.sh/aiserver.v1.DashboardService/GetCurrentPeriodUsage
 * - Method: POST
 * - Content-Type: application/proto
 */

import axios from "axios";
import {
  GetCurrentPeriodUsageRequest,
  GetCurrentPeriodUsageResponse,
} from "../gen/v1_pb";

async function sendAxiosProtobufRequest() {
  try {
    const requestMessage = new GetCurrentPeriodUsageRequest();
    // 序列化请求数据
    const binaryData = requestMessage.toBinary();
    const response = await axios({
      method: "POST",
      url: "https://api2.cursor.sh/aiserver.v1.DashboardService/GetCurrentPeriodUsage",
      data: binaryData,
      headers: {
        "Content-Type": "application/proto",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
        Authorization: "Bearer eyJxxx",
      },
      responseType: "arraybuffer",
    });
    console.log("状态码:", response.status);
    // 反序列化响应数据
    const responseData = new Uint8Array(response.data);
    const responseMessage =
      GetCurrentPeriodUsageResponse.fromBinary(responseData);
    console.log(responseMessage);

    return responseMessage;
  } catch (error) {
    console.error("❌ 请求失败:", (error as Error).message);
  }
}

sendAxiosProtobufRequest();
