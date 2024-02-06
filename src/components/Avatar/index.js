import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import Images from "../../themes/Images";

export default Avatar = ({ data, showName = true }) => {
  const isMoment = data.moment;
  return (
    <View style={styles.container}>
      <View >
        <View style={[styles.avatar_container, {
          borderWidth: isMoment ? 1 : 0,
        }]}>
          <Image source={data.avatar != "string" ? data.avatar : Images.default_avatar} style={[styles.avatar, {
            height: isMoment ? 58 : 66,
            width: isMoment ? 58 : 66,
          }]}
          />
        </View>
        {data.statusOnline && <View style={styles.dot_online} />}
      </View>

      {showName && <Text style={styles.text}>{data.name}</Text>}
    </View>
  );
}