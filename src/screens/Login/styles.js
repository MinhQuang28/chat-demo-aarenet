import { StyleSheet } from "react-native";
import Colors from "themes/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 68,
    paddingBottom: 24,
    paddingHorizontal: 16,
  },
  big_text: {
    fontSize: 34,
    color: Colors.black,
  },
  sign_in_text: {
    fontWeight: "500",
    marginBottom: 20,
  },
  welcome_text: {
    fontWeight: "400",
    marginBottom: 48,
  },
  input_container: {
    flexDirection: "column",
    gap: 16,
    flex: 1,
  },
  input_box: {
    height: 60,
    borderWidth: 1,
    borderColor: Colors.input_border,
    paddingHorizontal: 24,
    borderRadius: 16,
  },
  button: {
    height: 56,
    width: "100%",
    backgroundColor: Colors.deep_blue,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  button_text: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: "700",
  }

});