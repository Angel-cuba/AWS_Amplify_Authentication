import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import Input from '../../components/CustomInput/Input';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButton from '../../components/SocialButtons/SocialSignInButton';
import Logo from '../../../assets/angel_Dev.png';

const SigInScreen = () => {
  const {height} = useWindowDimensions();

  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSigInPress = () => {
    console.warn('SigIn');
  };
  const onForgotPasswordPress = () => {
    console.warn('ForgotPassword');
  };

  const onDontHaveAccount = () => {
    console.warn('DontHaveAccount');
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <Input placeholder="Username" value={userName} setValue={setUserName} />
        <Input
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomButton text="Sign In" onPress={onSigInPress} />
        <CustomButton
          text="ForgotPassword"
          onPress={onForgotPasswordPress}
          type="third"
        />
        <SocialSignInButton />
        <CustomButton
          text="Don't have an account? SignUp"
          onPress={onDontHaveAccount}
          type="third"
        />
      </View>
    </ScrollView>
  );
};

export default SigInScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '60%',
    maxWidth: 350,
    maxHeight: 200,
  },
});
