import React from "react";
import Icons from "../../themes/Icons";
import { TextInput, View } from "react-native";
import styles from "./styles";

export const SearchInput = ({
  value,
  setValue,
  placeholder = "Search Friend ID"
}) => {
  return (
    <View style={styles.input_container}>
      {Icons.Icons({ name: "search", height: 16, width: 16 })}
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.text_input}
        placeholder={placeholder}
      />
    </View>
  );
}