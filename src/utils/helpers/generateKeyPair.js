import { RSA } from 'react-native-rsa-native';

const generateKeyPairCustom  = async () => {
  const myKeyPair = await RSA.generateKeys(2048);
  return myKeyPair;
}

export default generateKeyPairCustom;