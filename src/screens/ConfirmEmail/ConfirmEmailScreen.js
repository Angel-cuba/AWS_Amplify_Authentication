import {View, StyleSheet, ScrollView, Text, Alert} from 'react-native';
import React from 'react';
import Input from '../../components/CustomInput/Input';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Auth} from 'aws-amplify';

const ConfirmEmailScreen = () => {
  const [code, setCode] = React.useState('');
  const navigation = useNavigation();
  const routes = useRoute();

  const onConfirmPress = async () => {
    try {
      await Auth.confirmSignUp(routes.params.username, code);
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Oops', error.message);
    }
  };
  const onResendPress = async () => {
    try {
      await Auth.resendSignUp(routes.params.username);
      navigation.navigate('Home');
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
        <Text style={styles.title}>Confirm email</Text>
        <Input value={routes?.params?.username} />
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
