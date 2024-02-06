import User from "./User";

export default class UserChat extends User {
  constructor({ chatId, userId, avatar, name, statusOnline, moment, lastMessage, time, status }) {
    super({ id: userId, avatar, name, statusOnline });
    this.chatId = chatId;
    this.moment = moment;
    this.lastMessage = lastMessage;
    this.time = time;
    this.status = status;
  }
}