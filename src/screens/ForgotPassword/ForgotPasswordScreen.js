import {View, Text, ScrollView, StyleSheet, Alert} from 'react-native';
import React from 'react';
import Input from '../../components/CustomInput/Input';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';

const ForgotPasswordScreen = () => {
  const [username, setUserName] = React.useState('');

  const navigation = useNavigation();

  const onConfirmPress = async () => {
    try {
      await Auth.forgotPassword(username);
      navigation.navigate('NewPassword');
    } catch (error) {
      Alert.alert('Oops', error.message);
    }
  };
  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <Text style={styles.subtitle}>Username *</Text>
        <Input
          placeholder="Enter your username...."
          value={username}
          setValue={setUserName}
        />

        <CustomButton text="Confirm" onPress={onConfirmPress} />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="third"
        />
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;
const styles = StyleSheet.create({
  root: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    marginVertical: 40,
    paddingLeft: 10,
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#c3c3c3',
    margin: 1,
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
