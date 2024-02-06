import React, { useEffect } from "react";
import { Text, View, Image, TouchableOpacity, BackHandler } from "react-native";
import Images from "themes/Images";
import styles from "./styles";
import Icons from "themes/Icons";
import Colors from "themes/Colors";
import IconButton from "../../components/IconButton";

export default Call = ({ navigation, route }) => {
  const { type } = route.params;
  const _isVideo = type == "video";
  console.log('🦊 type : ', type);


  const _handleCancelCall = () => {
    navigation.goBack();
  }

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      _handleCancelCall();
    });
    return () => backHandler.remove()
  }, [])

  const _renderBackground = () => {
    switch (type) {
      case "call":
        return (<View style={styles.customer_background}>
          <Image style={styles.customer_avatar} source={Images.customer_camera} />
        </View>);
      case "video":
        return (<Image style={styles.customer_camera} source={Images.customer_camera} />);

    }
  }


  return <View style={styles.container}>
    {_renderBackground()}
    {_isVideo && <Image style={styles.self_camera} source={Images.self_camera} />}

    <View style={styles.control_container}>
      <Text style={styles.name}>
        Ms. Jisoo (Black Pink ♥️)
      </Text>

      <Text style={styles.time}>
        00:05:24
      </Text>

      <View style={styles.button_container}>
        {_isVideo && <TouchableOpacity style={styles.button}>
          {Icons.Icons({ name: "camera", width: 24, height: 24, })}
        </TouchableOpacity>}

        {_isVideo && <IconButton
          iconName="camera"
          onPress={() => { }}
        />}

        <TouchableOpacity
          style={[styles.button, { backgroundColor: Colors.red }]}
          onPress={() => _handleCancelCall()}
        >
          {Icons.Icons({ name: "remove", width: 24, height: 24, })}
        </TouchableOpacity>

        {_isVideo && <TouchableOpacity style={styles.button}>
          {Icons.Icons({ name: "audio", width: 24, height: 24, })}
        </TouchableOpacity>
        }
      </View>
    </View>

  </View>
} 