import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';
import ConfirmEmailScreen from '../screens/ConfirmEmail';
import ForgotPasswordScreen from '../screens/ForgotPassword';
import NewPassword from '../screens/NewPassword';
import HomeScreen from '../screens/Home';
import {Auth, Hub} from 'aws-amplify';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  const [user, setUser] = React.useState(undefined);
  console.log('user', user);
  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      console.log('authUser', authUser);
      setUser(authUser);
    } catch (error) {
      setUser(null);
    }
  };
  React.useEffect(() => {
    checkUser();
  }, []);
  React.useEffect(() => {
    const listener = data => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser();
      }
    };
    Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener);
  }, []);
  if (user === undefined) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, initialRootName: 'SignIn'}}>
        {user ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <Stack.Group>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
            />
            <Stack.Screen name="NewPassword" component={NewPassword} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
