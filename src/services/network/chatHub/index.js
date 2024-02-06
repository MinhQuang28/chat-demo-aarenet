import {
  ChatUser
} from 'react-native-chat-realtime';
import { authEndPoint } from '../../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';


const token = AsyncStorage.getItem('accessToken');

const chatUser = new ChatUser(authEndPoint,  token);
// const apiManage = ChatMagement(chatManageEndpoint, token);
// const chat = ChatSocket(socketEndpoint, token);


export {
  chatUser,
  // apiManage,
  // apiMessage,
  // chat,
};

