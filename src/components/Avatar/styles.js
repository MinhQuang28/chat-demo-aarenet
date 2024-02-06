import { StyleSheet } from "react-native";
import Colors from "../../themes/Colors";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  avatar_container: {
    height: 66,
    width: 66,
    borderWidth: 1,
    borderColor: Colors.blue, 
    alignItems: "center", 
    justifyContent: "center",
    borderRadius: 33,
  },
  avatar: {
    height: 58, 
    width: 58,
    borderRadius: 29,
  },
  text:{
    textAlign: "center",
    marginTop: 5,
    fontWeight: "600",
  },
  dot_online: {
    width: 14,
    height: 14,
    backgroundColor: Colors.green,
    borderRadius: 7,
    position: "absolute",
    right: 0,
    bottom: 5,
    borderWidth: 1.7,
    borderColor: Colors.white,
  }
});