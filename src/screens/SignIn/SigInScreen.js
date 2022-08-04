import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import Input from '../../components/CustomInput/Input';
import Button from '../../components/CustomButton/Button';
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
  const onSignInWithFacebook = () => {
    console.warn('SignInWithFacebook');
  };
  const onSignInWithGoogle = () => {
    console.warn('SignInWithGoogle');
  };
  const onSignInWithApple = () => {
    console.warn('SignInWithApple');
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
        <Button text="Sign In" onPress={onSigInPress} />
        <Button
          text="ForgotPassword"
          onPress={onForgotPasswordPress}
          type="third"
        />
        <Button
          text="SignIn with Facebook"
          onPress={onSignInWithFacebook}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <Button
          text="SignIn with Google"
          onPress={onSignInWithGoogle}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <Button
          text="SignIn with Apple"
          onPress={onSignInWithApple}
          bgColor="#e3e3e3"
          fgColor="#363636"
        />
        <Button
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
