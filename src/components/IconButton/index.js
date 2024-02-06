import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./styles";
import Icons from "../../themes/Icons";
import Colors from "../../themes/Colors";

export default IconButton = ({
  iconName,
  onPress,
  backgroundColor = Colors.button_color
}) => {
  return <TouchableOpacity
    style={[styles.button, { backgroundColor }]}
    onPress={() => onPress()}
  >{Icons.Icons({ name: iconName, width: 24, height: 24, })}
  </TouchableOpacity>
}