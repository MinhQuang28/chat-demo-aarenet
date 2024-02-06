import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Colors from "themes/Colors";
import Icons from "themes/Icons";
import Images from "../../../themes/Images";
import styles from "../styles";

export default ChatLog = ({ messageLog }) => {
  const [chatLog, setChatLog] = useState([]);

  useEffect(() => {
    setChatLog(messageLog);
  }, [JSON.stringify(messageLog)])

  const userRedux = useSelector((state) => state.user.user)


  const renderMessage = (item) => {
    if (item.senderId === userRedux.Id) {
      return (
        <View style={styles.message_owner}>
          <View style={styles.right_message}>
            <View style={styles.message_owner_text_container}>
              {renderTextMesage(item, "white")}
            </View>
            <View style={styles.ic_check}>
              {Icons.Icons({ name: "check", width: 12, height: 12 })}
            </View>
          </View>
        </View>
      );
    } else {
      return <View style={styles.message_customer}>
        <View style={styles.left_message}>
          <Image source={Images.default_avatar} style={styles.avatar_item} />
          <View style={styles.dot_online} />
        </View>
        <View style={styles.message_customer_text_container}>
          {renderTextMesage(item, Colors.blue)}
        </View>
      </View>
    };
  }

  const renderTextMesage = (item, color) => {
    return <Text style={[styles.text_message, {
      color: color
    }]}>
      {item.message}
    </Text>
  }

  return <View style={styles.content_container}>
    <FlatList
      inverted
      showsVerticalScrollIndicator={false}
      data={chatLog}
      renderItem={({ item }) => {
        return <View style={styles.item_container}>
          {renderMessage(item)}
        </View>
      }
      }
    />
  </View>
}