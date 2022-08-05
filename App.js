/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './src/Navigation';
//Amplify
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
// import {withAthenticator} from 'aws-amplify-react-native';
import {withAuthenticator} from 'aws-amplify-react-native/dist/Auth';

Amplify.configure(config);

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FBFCFC',
  },
});

export default withAuthenticator(App);
