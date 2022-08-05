import {View, StyleSheet, ScrollView, Text} from 'react-native';
import React from 'react';
import Input from '../../components/CustomInput/Input';
import CustomButton from '../../components/CustomButton/CustomButton';

const ConfirmEmailScreen = () => {
  const [code, setCode] = React.useState('');

  const onConfirmPress = () => {
    console.warn('ConfirmPress');
  };
  const onResendPress = () => {
    console.warn('ResendPress');
  };
  const onSignInPress = () => {
    console.warn('SignIn');
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm email</Text>
        <Input
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />

        <CustomButton text="Confirm" onPress={onConfirmPress} />

        <CustomButton
          text="Resend code"
          onPress={onResendPress}
          type="second"
        />
        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="third"
        />
      </View>
    </ScrollView>
  );
};

export default ConfirmEmailScreen;
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
