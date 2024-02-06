import React from "react";
import note from "assets/svgs/note.svg";
import search from "assets/svgs/search.svg";
import myStory from "assets/svgs/myStory.svg";
import chat from "assets/svgs/chat.svg";
import chatGrey from "assets/svgs/chatGrey.svg";
import back from "assets/svgs/back.svg";
import video from "assets/svgs/video.svg";
import call from "assets/svgs/call.svg";
import check from "assets/svgs/check.svg";
import sticker from "assets/svgs/sticker.svg";
import emoji from "assets/svgs/emoji.svg";
import voice from "assets/svgs/voice.svg";
import like from "assets/svgs/like.svg";
import plus from "assets/svgs/plus.svg";
import remove from "assets/svgs/remove.svg";
import camera from "assets/svgs/camera.svg";
import audio from "assets/svgs/audio.svg";
import contactsGrey from "assets/svgs/contactsGrey.svg";
import contacts from "assets/svgs/contacts.svg";
import logout from "assets/svgs/logout.svg";
import plusMark from "assets/svgs/plusMark.svg";
const SVGs = {
  note,
  search,
  myStory,
  chat,
  chatGrey,
  back,
  video,
  call,
  check,
  sticker,
  emoji,
  voice,
  like,
  plus,
  remove,
  camera,
  audio,
  contactsGrey,
  contacts,
  logout,
  plusMark
}

export default {
  Icons: ({ name, width, height }) => {
    if (name in SVGs) {
      const Icons = SVGs[name];
      return <Icons name="" width={width} height={height} />
    } else {
      return null;
    }
  }
}