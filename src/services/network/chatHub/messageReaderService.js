import {InitMessageReader} from 'react-native-chat-realtime';
import {messageReaderEndPoint} from '../../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getChatHistory = async ({roomId, params}) => {
  const token = await AsyncStorage.getItem('accessToken');
  const result = await new InitMessageReader(
    messageReaderEndPoint,
    token,
  ).chatHistory({roomId, data: params});
  return result;
};
