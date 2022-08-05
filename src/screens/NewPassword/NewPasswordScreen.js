import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Input from '../../components/CustomInput/Input';
import CustomButton from '../../components/CustomButton';

const NewPasswordScreen = () => {
  const [code, setCode] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');

  const onSubmitPress = () => {
    console.warn('SubmitPress');
  };
  const onSignInPress = () => {
    console.warn('SignIn');
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <Text style={styles.subtitle}>Enter code</Text>
        <Input placeholder="Code" value={code} setValue={setCode} />
        <Text style={styles.subtitle}>New password</Text>
        <Input
          placeholder="Enter your new password"
          value={newPassword}
          setValue={setNewPassword}
        />

        <CustomButton text="Confirm" onPress={onSubmitPress} />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="third"
        />
      </View>
    </ScrollView>
  );
};

export default NewPasswordScreen;
const styles = StyleSheet.create({
  root: {
    padding: 20,
  },
  title: {
    alignItems: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 15,
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
    color: '#ccc',
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
