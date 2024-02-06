import { StyleSheet } from "react-native";
import Colors from "../../themes/Colors";

export default StyleSheet.create({
  input_container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.pale_blue,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 16,
    gap: 12,
  },
  text_input: {
    fontWeight: "600",
    flex: 1,
  },

});