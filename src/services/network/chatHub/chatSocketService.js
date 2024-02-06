import {
  InitChatSocket
} from 'react-native-chat-realtime';
import { socketEndpoint } from '../../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const createChatSocket = async (params) => {
  const token = await AsyncStorage.getItem('accessToken');
  const result = new InitChatSocket(socketEndpoint,token);
  return result;
}


