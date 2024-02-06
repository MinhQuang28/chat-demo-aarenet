import React from "react";
import { View, Text, TouchableOpacity, Image, } from "react-native";
import Icons from "themes/Icons";
import Images from "themes/Images";
import styles from "../styles";
import { useSelector } from "react-redux";

export default DetailHeader = ({ navigation }) => {

  const userRedux = useSelector((state) => state.user.user)

  return <View style={styles.header_container}>
    <View style={styles.left_header}>

      <TouchableOpacity style={styles.back_button} onPress={() => navigation.pop()}>
        {Icons.Icons({ name: 'back', width: 32, height: 32 })}
      </TouchableOpacity>

      <Image source={Images.avatar1} style={styles.avatar_header} />

      <Text style={styles.text_name_header}>{userRedux.Email}</Text>

    </View>

    <View style={styles.right_header}>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Call', {
          type: "call"
        });
      }}>
        {Icons.Icons({ name: 'call', width: 32, height: 32 })}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Call', {
            type: "video"
          });
        }}
      >
        {Icons.Icons({ name: 'video', width: 32, height: 32 })}
      </TouchableOpacity>
    </View>
  </View>
}