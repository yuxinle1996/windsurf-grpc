import { createClient } from "@connectrpc/connect";
import { SeatManagementService } from "./gen/seat_management_pb_connect";
import { createConnectTransport } from "@connectrpc/connect-web";

const transport = createConnectTransport({
  baseUrl: "https://web-backend.windsurf.com",
});

async function main() {
  const client = createClient(SeatManagementService, transport);
  const res = await client.userSSOLoginRedirect({
    email: "example@example.com",
  });
  console.log(res);
}
main();
