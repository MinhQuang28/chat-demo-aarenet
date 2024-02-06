import React, { useEffect, useState } from "react";
import { Alert, FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Icons from "themes/Icons";
import Avatar from "../../components/Avatar";
import { SearchInput } from "../../components/SearchInput";
import { createChatRoom, deleteChatRoom, getChatRoom } from "../../services/network/chatHub/chatManageService";
import { deleteLocalData, getMyListFriend } from "../../services/network/chatHub/userService";
import socket from "../../services/network/socket/socket";
import styles from "./styles";


export default List = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState("");
  const [friends, setFriends] = useState([]);
  const [isConnect, setIsConnect] = useState(socket.connected);
  const [listEvent, setListEvent] = useState([]);
  const [chatRoomList, setChatRoomList] = useState([]);

  const userRedux = useSelector((state) => state.user.user)
  const dispatch = useDispatch();

  useEffect(() => {

    const onConnect = () => {
      setIsConnect(true);
    }
    const onDisconnect = () => {
      setIsConnect(false);
    }
    const onListEvent = (value) => {
      setListEvent(prev => [...prev, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('listEvent', onListEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('listEvent', onListEvent);
    }
  }, [])


  const _getFriendList = async () => {
    const result = await getMyListFriend();
    if (result.success) {
      const listFriend = result?.data?.items ?? [];
      setFriends(listFriend);
    }
  }

  const _getChatRoomList = async () => {
    const result = await getChatRoom();
    if (result.success) {
      const _chatRooms = result?.data?.items ?? [];
      setChatRoomList(_chatRooms);
    }
  }

  useEffect(() => {
    _getFriendList();
    _getChatRoomList();
  }, [])

  const _handleLogout = async () => {
    await deleteLocalData();
    navigation.navigate("Login");
  }

  const _createChatRoom = async (user) => {
    const ownerId = userRedux.Id;
    const params = {
      name: user.id,
      typeOfGroup: 1,
      topic: user.name,
      ownerId,
      participants: [user.id],
    };
    const result = await createChatRoom(params);
    if (result.success) {
      const roomId = result.data.id;
      navigation.navigate("Details", {
        roomId: roomId,
      });
    }
  }

  const _handleDeleteRoom = async (roomId) => {
    const result = await deleteChatRoom(roomId);
    if(result?.success){
      _getChatRoomList;
    }
  }

  const _handleEnterRoom = (roomId) => {
    navigation.navigate('Details',{
      roomId,
    })
  }

  const _handleDetailRoom = (item) => {
    Alert.alert("Action", 'Room action ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => _handleDeleteRoom(item?.id),
        style: 'destructive',
      },
      { text: 'Enter', onPress: () => _handleEnterRoom(item?.id) },
    ]);
  }

  return <View style={styles.container}>
    <View style={styles.header_container}>
      <Text style={styles.text_header}>Chats</Text>
      <TouchableOpacity
        onPress={() => _handleLogout()}
      >
        {Icons.Icons({ name: "logout", height: 20, width: 20 })}
      </TouchableOpacity>
    </View>
    <View style={styles.content_container}>
      <SearchInput
        value={searchValue}
        setValue={setSearchValue}
      />
   
      {friends?.length > 0 ? <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontal_container}>
        <TouchableOpacity style={styles.my_story}>
          {Icons.Icons({ name: "myStory", height: 66, width: 66 })}
          <Text style={styles.text_horizontal}>Create Room</Text>
        </TouchableOpacity>
        {friends.map((item, index) => {
          return <View key={index} style={{ marginLeft: 16 }}>
            <TouchableOpacity
              key={index}
              onPress={() => _createChatRoom(item)}
            >
              <Avatar
                data={item}
              />
            </TouchableOpacity>
          </View>
        })}
      </ScrollView> : <Text style={styles.no_friend}>No friend added !</Text>}
   
      <View style={styles.line} />
      <View style={styles.list_container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={chatRoomList}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.item}
                onPress={() => _handleDetailRoom(item)}
              >
                <View style={styles.left_item}>
                  <Avatar data={{ avatar: "string", statusOnline: true, moment: true, }} showName={false} />
                  <View style={styles.info}>
                    <Text style={styles.name}>{item?.topic}</Text>
                    <Text style={[styles.last_message]}>{item?.lastMessage?.message ?? "No message"}</Text>
                  </View>
                </View>
                <View style={styles.right_item}>
                  <Text style={{}}>{item?.time}</Text>
                  <View style={styles.dot_unread} />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  </View>

}