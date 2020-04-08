import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import SplashLogo from '../../assets/Group2758.svg';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboard');
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.background}>
      <View style={styles.image}>
        <SplashLogo />
        <Text style={styles.txt}>Vendor</Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#000000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 21,
    fontWeight: '900',
    lineHeight: 20,
  },
});
