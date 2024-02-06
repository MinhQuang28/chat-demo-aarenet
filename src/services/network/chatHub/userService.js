import {
  ChatUser,
  InitChatUser,
} from 'react-native-chat-realtime';
import { authEndPoint } from '../../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const saveTokenToDevice = async (token) => {
  try {
    await AsyncStorage.setItem('accessToken', token);
    console.log('✅ Save token successfully !', token);
  } catch (e) {
    console.log('🚫 Cannot save token to Device ', e);
  }
}

export const saveLoginData = async ({ user, password }) => {
  try {
    await AsyncStorage.setItem('user', user);
    await AsyncStorage.setItem('password', password);
    console.log('✅ Save login data successfully ! !', {
      user, password
    });
  } catch (e) {
    console.log('🚫 Cannot save token to Device ', e);
  }
}

export const deleteLocalData = async () => {
  try {
    await AsyncStorage.removeItem('user');
    await AsyncStorage.removeItem('password');
    await AsyncStorage.removeItem('accessToken');
    console.log('✅ Remove login data successfully ! !');
  } catch (e) {
    console.log('🚫 Cannot remove data from device ', e);
  }
}

export const getAutoLoginData = async () => {
  try {
    const user = await AsyncStorage.getItem('user');
    const password = await AsyncStorage.getItem('password');

    if (user && password) {
      console.log('✅ Get auto login data successfully !', { user, password });
      return { user, password };
    }
    else {
      console.log('🚫 No data stored');
      return false;
    }
  } catch (e) {
    console.log('🚫 Cannot get data from device');
    return false
  }
}

export const getTokenFromDevice = async () => {
  try {
    const token = await AsyncStorage.getItem('accessToken')
    if (token) {
      console.log('✅ Get token successfully !', token);
      return token;
    }
    else {
      console.log('🚫 No token stored');
      return false;
    }
  } catch (e) {
    console.log('🚫 Cannot get token from device');
    return false
  }
}

export const login = async ({
  userName,
  passWord,
  pushToken,
}) => {
  const result = await new ChatUser(authEndPoint, "").login({
    userName,
    passWord,
    pushToken,
  });
  return result;
}

export const userDoAction = async ({ userId, actionType }) => {
  const token = await AsyncStorage.getItem('accessToken');
  const result = await new ChatUser(authEndPoint, token).userDoAction(userId, actionType);
  return result;
}

export const getMyListFriend = async () => {
  const token = await AsyncStorage.getItem('accessToken');
  const result = await new ChatUser(authEndPoint, token).listFriends();
  return result;
}

export const getUserKey = async () => {
  const token = await AsyncStorage.getItem('accessToken');
  const result = await new ChatUser(authEndPoint, token).userEncryptKey();
  return result;
}



