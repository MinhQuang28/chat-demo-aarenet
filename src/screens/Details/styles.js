import { StyleSheet } from "react-native";
import Colors from "themes/Colors";

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
  left_header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  avatar_header: {
    height: 42,
    width: 42,
  },
  text_name_header: {
    fontSize: 16,
    color: Colors.black,
  },
  right_header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 20,

  },
  content_container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  message_customer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  message_owner: {
    marginTop: 16,
  },
  avatar_item: {
    height: 34,
    width: 34,
  },
  dot_online: {
    width: 7.27,
    height: 7.27,
    borderWidth: 1,
    borderColor: Colors.white,
    position: "absolute",
    backgroundColor: Colors.green,
    bottom: 2,
    right: 1,
    borderRadius: 4,
  },
  left_message: {
    alignSelf: "flex-start",
  },
  right_message: {
    alignSelf: "flex-end",
    flexDirection: "row",
  },
  ic_check: {
    justifyContent: 'flex-end',
  },
  text_message: {
    fontSize: 15,
  },
  message_customer_text_container: {
    backgroundColor: Colors.pale_blue,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: "flex-start", 
    borderRadius: 100,
  },
  message_owner_text_container: {
    backgroundColor: Colors.blue,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: "flex-start", 
    borderRadius: 100,
  },
  bottom_container: {
    flexDirection: "row", 
    backgroundColor: Colors.white,
    borderTopColor: Colors.grey,
    borderTopWidth: 1,
    height: 60,
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 12,
  },
  chat_box: {
    flex: 1,
    height: 36,
    backgroundColor: Colors.pale_blue,
    borderRadius: 30,
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 4,
    alignItems: "center",
  },
  input_box: {
    flex: 1,
    height: 36,
  }

});