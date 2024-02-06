import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Keyboard, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  InitChatSocket,
  encryptString,
  generateKeyPair,
} from 'react-native-chat-realtime';
import {socketEndpoint} from '../../config';
import Icons from '../../themes/Icons';
import ChatLog from './components/ChatLog';
import DetailHeader from './components/Header';
import {useSelector} from 'react-redux';
import {getUserKey} from '../../services/network/chatHub/userService';

export default Details = ({navigation, route}) => {
  const {roomId} = route.params;
  const [message, setMessage] = useState('');
  const [messageLog, setMessageLog] = useState([]);
  const [chat, setChat] = useState();
  const [myPublicKey, setMyPublicKey] = useState(null);

  // const _getChatHistory = async (newMessage) => {
  //   const params = {
  //     userId: '', skip: 0, take: 20
  //   };
  //   const result = await getChatHistory({ roomId, params });
  //   if (result.success) {
  //     let _listMessage = result?.data?.messages;
  //     if (newMessage) {
  //       _listMessage = [newMessage, ..._listMessage,];
  //     }
  //     setMessageLog(_listMessage);
  //   }
  // }

  const _addNewMessage = async newMessage => {
    setMessageLog(prv => {
      return [newMessage, ...prv];
    });
  };

  const _initSocket = async () => {
    const token = await AsyncStorage.getItem('accessToken');
    const _chatSocket = new InitChatSocket(socketEndpoint, token);
    setChat(_chatSocket);
  };

  const _getSecretKey = async () => {
    const myKeyPair = await generateKeyPair();
    const myKey = await getUserKey();

    console.log('my key pair : ', myKeyPair); // Cannot get key pair here !

    if (myKey?.data?.pubKey) {
      setMyPublicKey(myKey.data.pubKey);
    }
  };

  useLayoutEffect(() => {
    // _getChatHistory();
    _initSocket();
    _getSecretKey();
  }, []);

  const userRedux = useSelector(state => state.user.user);

  useEffect(() => {
    console.log('');
    if (chat) {
      chat.connect();
      console.log('CHAT CONNECT SUCCESSFULLY !');
      chat.receiveMessage(newMessage => {
        console.log(`🥹 ${userRedux.Email}  received new message :`, newMessage);
        _addNewMessage(newMessage);
      });
    }

    return () => {
      if (chat) {
        chat.disconnect();
      }
    };
  }, [chat]);

  const _handleSendMessage = async () => {
    console.log('♥️ my public key before send message :', myPublicKey);
    const encryptMessage = await encryptString(myPublicKey, message);
    console.log('encrypt Mesage', encryptMessage);

    const param = {
      message: message,
      // message: encryptMessage,
      attachments: [],
      forwardFromRoomId: '',
      mentionIds: [],
      type: 0,
      quoteMessageId: '',
      forwardMessageId: '',
    };
    await chat.sendMessage(param, roomId);
    setMessage('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <DetailHeader navigation={navigation} />
      <ChatLog messageLog={messageLog} navigation={navigation} />
      <View style={styles.bottom_container}>
        {Icons.Icons({name: 'sticker', width: 28, height: 28})}
        <View style={styles.chat_box}>
          {Icons.Icons({name: 'emoji', width: 26, height: 26})}
          <TextInput
            style={styles.input_box}
            value={message}
            onChangeText={setMessage}
            placeholder="Start Typing..."
          />
          <TouchableOpacity
            onPress={() => {
              _handleSendMessage();
            }}>
            {Icons.Icons({name: 'plus', width: 26, height: 26})}
          </TouchableOpacity>
        </View>
        {Icons.Icons({name: 'voice', width: 30, height: 30})}
        {Icons.Icons({name: 'like', width: 30, height: 30})}
      </View>
    </View>
  );
};
