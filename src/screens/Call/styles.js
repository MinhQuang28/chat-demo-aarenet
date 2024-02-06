import { StyleSheet } from "react-native";
import Colors from "themes/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  self_camera: {
    width: 76,
    height: 120,
    borderRadius: 16,
    position: "absolute",
    top: 24,
    right: 24,
  },
  customer_camera: {
    width: "100%",
    height: "100%",
  },
  customer_background: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
  customer_avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  } ,   
  control_container: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    alignItems: "center",
  },
  name: {
    color: Colors.white,
    fontSize: 16,
    fontWeight:"600",
  },
  time: {
    color: Colors.white,
    fontSize: 14, 
    marginTop: 8,
  },

  button_container: {
    marginTop: 24,
    flexDirection: "row",
    gap: 20,
  }, 
  button:{
    width: 48, 
    height: 48,
    backgroundColor: "rgba(255, 255, 255, 0.20)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24, 
  }

});