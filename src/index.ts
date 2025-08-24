import { createClient } from "@connectrpc/connect";
import { SeatManagementService } from "./gen/seat_management_pb_connect";
import { createConnectTransport } from "@connectrpc/connect-web";

const webToken = "eyxxx";

const transport = createConnectTransport({
  baseUrl: "https://web-backend.windsurf.com",
});

async function main() {
  const client = createClient(SeatManagementService, transport);
  // const [res1, res2] = await Promise.all([
  //   // 接口 UserSSOLoginRedirect
  //   client.userSSOLoginRedirect({
  //     email: "example@example.com",
  //   }),
  //   // 接口 GetCurrentUser
  //   client.getCurrentUser(
  //     {
  //       authToken: webToken,
  //       generateProfilePictureUrl: true,
  //       createIfNotExist: true,
  //       includeSubscription: true,
  //       ssoToken: "",
  //       samlProviderId: "",
  //     },
  //     {
  //       headers: {
  //         "X-Auth-Token": webToken,
  //       },
  //     }
  //   ),
  // ]);
  // console.log("res1", res1);
  // console.log("res2", res2);

  const res = await client.getOneTimeAuthToken({
    firebaseIdToken: webToken,
  });
  console.log(res);
}
main();
