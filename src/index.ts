import { createClient } from "@connectrpc/connect";
import { SeatManagementService } from "./gen/seat_management_pb_connect";
import { createConnectTransport } from "@connectrpc/connect-web";
import { RegisterUserRequest } from "./gen/seat_management_pb_pb";
import axios from "axios";

const webToken = "eyJxxx";

const transport = createConnectTransport({
  baseUrl: "https://web-backend.windsurf.com",
  // baseUrl: "https://register.windsurf.com", // 仅限RegisterUser接口使用
});

async function main() {
  const client = createClient(SeatManagementService, transport);
  const res1 = await client.getCurrentUser(
    {
      authToken: webToken,
      generateProfilePictureUrl: true,
      createIfNotExist: true,
      includeSubscription: true,
      ssoToken: "",
      samlProviderId: "",
    },
    {
      headers: {
        "X-Auth-Token": webToken,
      },
    }
  );
  console.log("res1", res1);

  const res2 = await client.getOneTimeAuthToken({
    firebaseIdToken: webToken,
  });
  console.log(res2.authToken);

  const res3 = await client.registerUser({
    firebaseIdToken: webToken,
  });
  console.log(res3);

  // RegisterUser有两种请求方式 proto和json, 以及两个不同的URL, 使用axios示例
  const requestData = new RegisterUserRequest({
    firebaseIdToken: webToken,
  });
  const res4 = await axios.post(
    "https://web-backend.windsurf.com/exa.seat_management_pb.SeatManagementService/RegisterUser",
    requestData.toJson(),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(res4.data);
}
main();
