import { io } from "socket.io-client";
import { socketEndpoint } from "../../../config";
const URL = socketEndpoint;
export default socket = io(URL, {
  autoConnect: true,
});