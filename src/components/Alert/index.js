import React from "react";
import { Alert } from "react-native";

const AlertMessage = (message, type) => {
  switch (type) {
    case "ok":
      Alert.alert("Successfully !", message);
      break;
    case "error":
      Alert.alert("Error", message);
      break;
    default:
      Alert.alert("Alert", message);
      break;
  }
}

export default AlertMessage;