import onChat from "./events/onChat";
import HBClient, { HBClientConfig } from "./HBClient";
import roomConfig from "./roomConfig";

declare function HBInit(clientConfig: HBClientConfig): HBClient;

const client = HBInit(roomConfig);

client.setTeamsLock(true);

export default client;

client.onPlayerJoin = (player) => {
  client.setPlayerAdmin(player.id, true);
};

client.onPlayerChat = onChat;
