import { StyleSheet } from "react-native";
import Colors from "themes/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header_text: {
    marginTop: 36,
    marginBottom: 24,
    fontSize: 20,
    textAlign: "center",
    color: Colors.black,
    fontWeight: "600",
  },
  content_container: {
    paddingHorizontal: 16,
  },
  button_container: {
    marginTop: 20,
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
  },
});