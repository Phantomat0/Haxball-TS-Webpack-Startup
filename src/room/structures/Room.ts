import HBClient from "../HBClient";

class RoomClient {
  private _client: HBClient;

  initClient(client: HBClient) {
    this._client = client;
  }
}

const Room = new RoomClient();

export default Room;
