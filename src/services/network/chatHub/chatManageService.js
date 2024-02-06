import {InitChatManagement} from 'react-native-chat-realtime';
import {chatManageEndpoint} from '../../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const createChatRoom = async params => {
  const token = await AsyncStorage.getItem('accessToken');
  const result = await new InitChatManagement(
    chatManageEndpoint,
    token,
  ).createRoomChat(params);
  return result;
};

export const getChatRoom = async () => {
  const token = await AsyncStorage.getItem('accessToken');
  const result = await new InitChatManagement(
    chatManageEndpoint,
    token,
  ).listRoomChat({userId: 'dd', skip: 0, take: 20});
  console.log('get chat room result : ', result);
  return result;
};

export const deleteChatRoom = async roomId => {
  console.log('delete chat room uid : ', roomId);
  const token = await AsyncStorage.getItem('accessToken');
  const result = await new InitChatManagement(
    chatManageEndpoint,
    token,
  ).deleteChatRoom(roomId);
  return result;
};

export const createGroupEncryptKey = async roomId => {
  console.log('generate group encrypt key ', roomId);
  const result = await new InitChatManagement(
    chatManageEndpoint,
    token,
  ).groupEncryptKey(roomId);
  return result;
};
