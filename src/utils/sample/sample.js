import User from "entity/User";
import UserChat from "entity/UserChat";
import Images from "themes/Images";
import Message from "entity/Message";

/// ---- USER ---- 
const user0 = new User({ id: 0, name: "Annie", avatar: Images.avatar1, statusOnline: true });
const user1 = new User({ id: 1, name: "Jenni", avatar: Images.avatar2, statusOnline: false });
const user2 = new User({ id: 2, name: "Samuel", avatar: Images.avatar3, statusOnline: true });
const user3 = new User({ id: 3, name: "Andrie", avatar: Images.avatar4, statusOnline: true });

export const USER_DATA = [
  user0,
  user1,
  user2,
  user3,
]

/// ---- CHAT LOG ---- 

const chatLog1 = new UserChat({
  chatId: 1,
  name: "Annie",
  avatar: Images.avatar1,
  statusOnline: true,
  moment: false, //đang online !
  lastMessage: "You sent a sticker",
  time: "5:30 PM",
  status: "read",
});

const chatLog2 = new UserChat({
  chatId: 0,
  name: "Jenni",
  avatar: Images.avatar2,
  statusOnline: true,
  moment: true,
  lastMessage: "You sent a sticker",
  time: "6:00 PM",
  status: "unread",
});

export const CHAT_LIST = [
  chatLog1,
  chatLog2,
  chatLog1,
  chatLog2,
  chatLog1,
  chatLog2,
];


/// ---- MESSAGE ---- 


// this.id = id;
// this.fromId = fromId;
// this.user = new User(user);
// this.message = message;
// this.sent = sent;


const message1 = new Message({
  id: 1,
  fromId: 1,
  user: { id: 0, name: "Annie", avatar: Images.avatar1, statusOnline: true },
  typeMessage: 0, 
  message: "Hello babe :)) "
});

const message2 = new Message({
  id: 2,
  fromId: 1,
  user: { id: 1, name: "Jenni", avatar: Images.avatar2, statusOnline: false },
  typeMessage: 0, 
  message: "Hello, how are you ! ",
});

const message3 = new Message({
  id: 3,
  fromId: 2,
  user: { id: 1, name: "Jenni", avatar: Images.avatar2, statusOnline: false },
  typeMessage: 0, 
  message: "Hello, how are you ! ",
});

export const MESSAGE_LOG = [
  message1,
  message2,
  message1,
  message3,
  message2,
  message1,
  message2,
  message3,
  message1,
  message2,
  message3,
  message1,
  message2,
  message3,
  message1,
  message2,
  
];

//--- TEST OWNER ID ----
export const OWNER_ID_TEST = "f528033e-9975-4d1a-9b9c-8e61f0eff2a1"; 
