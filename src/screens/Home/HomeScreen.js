import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Auth} from 'aws-amplify';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const signOut = () => {
    Auth.signOut();
    navigation.navigate('SignIn');
  };
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.text}>HomeScreen</Text>
      <Text onPress={signOut} style={styles.backButton}>
        Sign out
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    alignSelf: 'center',
  },
  backButton: {
    width: '100%',
    textAlign: 'center',
    color: 'red',
    marginTop: 'auto',
    marginVertical: 20,
    fontSize: 24,
  },
});
