import React, { useState } from "react";
import { Keyboard, Text, View } from "react-native";
import styles from "./styles";
import { SearchInput } from "../../components/SearchInput";
import IconButton from "../../components/IconButton";
import Colors from "../../themes/Colors";
import { USER_DO_ACTION_TYPE } from "../../utils/constants/constants";
import { userDoAction } from "../../services/network/chatHub/userService";
import AlertMessage from "../../components/Alert";
import Avatar from "../../components/Avatar";

export default Friends = ({ navigation }) => {
  const [value, setValue] = useState("");

  const _handleFriend = async (type) => {
    Keyboard.dismiss();
    const isAdd = type === "add";
    const text = isAdd ? "Add friend" : "Remove friend";
    const params = {
      userId: value,
      actionType: isAdd ? USER_DO_ACTION_TYPE.ADD_FRIEND : USER_DO_ACTION_TYPE.UN_FRIEND,
    }
    const result = await userDoAction(params);
    if (result?.success) {
      AlertMessage(`${text} successfully !`);
      setValue("");
    } else {
      const err = result?.message;
      AlertMessage(err ?? `${text} failure !`);
    }
    
  }

  const _handleAddFriend = async () => {
    _handleFriend("add");
  }

  const _handleUnFriend = () => {
    _handleFriend("remove");
  }

  return <View style={styles.container}>
    <Text style={styles.header_text}>
      Friend
    </Text>
    <View style={styles.content_container}>
      <SearchInput
        value={value}
        setValue={setValue}
        placeholder="Find friends by Id"
      />

      <View style={styles.button_container}>
        <IconButton
          backgroundColor={Colors.blue}
          iconName={"plusMark"}
          onPress={() => _handleAddFriend()}
        />
        <IconButton
          backgroundColor={Colors.red}
          iconName={"remove"}
          onPress={() => _handleUnFriend()}
        />
      </View>
    </View>
  </View>
} 