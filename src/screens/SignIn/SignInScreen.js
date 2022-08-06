import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';
import Input from '../../components/CustomInput/Input';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButton from '../../components/SocialButtons/SocialSignInButton';
import {useNavigation} from '@react-navigation/native';
import Logo from '../../../assets/angel_Dev.png';

//Amplify
import {Auth} from 'aws-amplify';

const SigInScreen = () => {
  const [username, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSigInPress = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await Auth.signIn(username, password);
      console.log('response', response);
    } catch (error) {
      Alert.alert('Oops', error.message);
    }
    setLoading(false);
  };
  const onForgotPasswordPress = () => {
    navigation.navigate('ForgotPassword');
  };

  const onDontHaveAccount = () => {
    navigation.navigate('SignUp');
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <Input placeholder="Username" value={username} setValue={setUserName} />
        <Input
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 5,
              message: 'Password must be at least 5 characters',
            },
          }}
        />
        <CustomButton
          text={loading ? 'Loading...' : 'Sign In'}
          onPress={onSigInPress}
        />
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
