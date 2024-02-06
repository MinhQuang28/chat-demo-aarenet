import { StyleSheet } from "react-native";
import Colors from "../../themes/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
    height: 50,
  },
  text_header: {
    fontSize: 24,
    color: Colors.black,
  },
  content_container: {
    marginHorizontal: 16,
    marginTop: 20,
  },
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
  horizontal_container: {
    marginTop: 20,
  },
  horizontal_list: {
    flexDirection: "row",
  },
  no_friend: {
    marginTop: 20,
    textAlign: "center",
  },
  my_story: {
    flexDirection: "column",
    alignItems: "center"
  },
  text_horizontal: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: "500",
    textAlign: "center"
  },
  line: {
    height: 1,
    marginHorizontal: 16,
    marginTop: 20,
    backgroundColor: Colors.pale_blue,
  },

  list_container: {
    marginTop: 20,
    // flex: 1,
    height: 400,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  left_item: {
    flexDirection: "row",
    gap: 12,
  },
  info: {
    justifyContent: "center",
  },
  name: {
    fontSize: 17,
    lineHeight: 24,
    marginBottom: 8,
  },
  last_message: {
    fontSize: 14,
    lineHeight: 18,
  },
  right_item: {
    justifyContent: "center",
    alignItems: "flex-end",
    gap: 12
  },
  dot_unread: {
    height: 9,
    width: 9,
    backgroundColor: Colors.blue,
    borderRadius: 4.5,
  }

});