import {View, StyleSheet, ScrollView, Text, Alert} from 'react-native';
import React from 'react';
import Input from '../../components/CustomInput/Input';
import SocialSignInButton from '../../components/SocialButtons/SocialSignInButton';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';

const SignUpScreen = () => {
  const [name, setName] = React.useState('');
  const [username, setUserName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const navigation = useNavigation();

  const onRegisterPress = async () => {
    // navigation.navigate('ConfirmEmail');
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          name,
          preferred_username: username,
        },
      });
      navigation.navigate('ConfirmEmail', {username});
    } catch (error) {
      Alert.alert('Hei...', error.message);
    }
  };
  const onTermsOfUsePress = () => {
    console.warn('SignInWithFacebook');
  };
  const onPrivacyPress = () => {
    console.warn('SignInWithGoogle');
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Create Account</Text>
        <Input placeholder="Name" value={name} setValue={setName} />
        <Input placeholder="Username" value={username} setValue={setUserName} />
        <Input placeholder="Email" value={email} setValue={setEmail} />
        <Input
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <Input
          placeholder="Confirm Password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          secureTextEntry
        />
        <CustomButton text="Register" onPress={onRegisterPress} />
        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePress}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPress}>
            Privacy Policy
          </Text>
        </Text>

        <SocialSignInButton />
        <CustomButton
          text="Have an account? Sign in"
          onPress={onSignInPress}
          type="third"
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 15,
  },
  text: {
    color: 'silver',
    textAlign: 'center',
  },
  link: {
    color: '#4765A9',
    fontWeight: 'bold',
  },
});
