import AlertMessage from 'components/Alert';
import React, {useEffect, useState} from 'react';
import {
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {setUserRedux} from '../../redux/slice/userSlice';
import {
  getAutoLoginData,
  login,
  saveLoginData,
  saveTokenToDevice,
} from '../../services/network/chatHub/userService';
import tokenParser from '../../utils/helpers/tokenParser';
import styles from './styles';

export default LoginScreen = ({navigation}) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('workhub@123');
  const dispatch = useDispatch();

  const _loginHandler = async ({user, password}) => {
    const params = {
      userName: user,
      passWord: password,
      pushToken: '',
    };
    const result = await login(params);
    const resultToken = result?.data?.access_token;
    if (resultToken != null) {
      console.log('done access token ');
      await saveTokenToDevice(resultToken);
      await saveLoginData({user, password});
      //-- parse token
      const detailUser = tokenParser(resultToken);
      dispatch(setUserRedux(detailUser));
      navigation.navigate('Main');
    } else {
      const err =
        result?.data?.error?.message ?? 'Wrong username or password !';
      AlertMessage(err);
    }
  };

  useEffect(() => {
    const autoLogin = async () => {
      const {user: userStored, password: passwordStored} =
        await getAutoLoginData();
      if (userStored && passwordStored) {
        _loginHandler({user: userStored, password: passwordStored});
      }
    };
    autoLogin();
  }, []);

  const _handleSubmit = async () => {
    Keyboard.dismiss();
    _loginHandler({user, password});
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <Text style={[styles.big_text, styles.sign_in_text]}>
          Let's sign up.{' '}
        </Text>
        <Text style={[styles.big_text, styles.welcome_text]}>
          Welcom back.
          {'\n'}
          You've been missed!
          {'\n'}
        </Text>

        <View style={styles.input_container}>
          <TextInput
            style={styles.input_box}
            value={user}
            onChangeText={setUser}
            placeholder="Phone, email, or username"
          />

          <TextInput
            style={styles.input_box}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            placeholder="Password"
          />

          {/* Test */}
          <View style={{alignItems: 'center', gap: 10, marginBottom: 100}}>
            <TouchableOpacity onPress={() => dispatch(increment())}>
              <Text>Increse + </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch(decrement())}>
              <Text>Decrease - </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottom_container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => _handleSubmit()}>
            <Text style={styles.button_text}>Log in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
