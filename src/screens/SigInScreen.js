import {View, Image, StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react';
import Logo from '../../assets/angel_Dev.png';

const SigInScreen = () => {
  const {height} = useWindowDimensions();
  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />
    </View>
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
