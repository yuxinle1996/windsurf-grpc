import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import {
  UserSSOLoginRedirectRequest,
  UserSSOLoginRedirectResponse,
} from "./gen/seat_management_pb_pb";

// 配置接口
export interface ProtobufRequestConfig {
  /** 基础 URL */
  baseUrl: string;
  /** 服务名称 例如 exa.seat_management_pb.SeatManagementService */
  service: string;
  /** 方法名称 */
  method: string;
  /** 超时时间 默认10000ms */
  timeout?: number;
  /** 请求头 */
  headers?: Record<string, string>;
}

// Protobuf 客户端类
export class ProtobufAxiosClient {
  private config: ProtobufRequestConfig;

  constructor(config: ProtobufRequestConfig) {
    this.config = {
      timeout: 10000,
      ...config,
    };
  }

  /**
   * 发送 Protobuf 请求
   */
  async sendRequest<TRequest, TResponse>(
    requestMessage: TRequest,
    ResponseClass: new () => TResponse,
    options?: Partial<AxiosRequestConfig>
  ): Promise<TResponse> {
    try {
      // 序列化请求数据
      const requestData = (requestMessage as any).toBinary();
      // 构建完整的 URL
      const url = `${this.config.baseUrl}/${this.config.service}/${this.config.method}`;
      // 默认请求配置
      const requestConfig: AxiosRequestConfig = {
        method: "POST",
        url,
        data: requestData,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
          "Content-Type": "application/proto",
          Accept: "application/proto",
          ...this.config.headers,
          ...options?.headers,
        },
        responseType: "arraybuffer",
        timeout: this.config.timeout,
        ...options,
      };

      console.log(`发送请求到: ${url}`);
      console.log("请求数据大小:", requestData.length, "字节");

      const response: AxiosResponse<ArrayBuffer> = await axios(requestConfig);

      console.log("响应状态:", response.status);
      console.log("响应数据大小:", response.data.byteLength, "字节");

      // 反序列化响应数据
      const responseBytes = new Uint8Array(response.data);
      const responseMessage = (ResponseClass as any).fromBinary(responseBytes);

      return responseMessage;
    } catch (error) {
      throw error;
    }
  }
}

async function main() {
  const client = new ProtobufAxiosClient({
    baseUrl: "https://web-backend.windsurf.com",
    service: "exa.seat_management_pb.SeatManagementService",
    method: "UserSSOLoginRedirect",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
    },
  });
  try {
    const request = new UserSSOLoginRedirectRequest({
      email: "example@example.com",
    });
    const response = await client.sendRequest(
      request,
      UserSSOLoginRedirectResponse
    );
    console.log("响应:", response);
  } catch (error) {
    console.error("请求失败:", error);
  }
}

main();
