import User from "./User";

export default class Message {
  constructor({ id, fromId, user, message, sent, typeMessage }) {
    this.id = id;
    this.fromId = fromId;
    this.user = new User(user);
    this.message = message;
    this.sent = sent;
    this.typeMessage = typeMessage;
  }
}