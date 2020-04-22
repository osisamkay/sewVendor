import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  PermissionsAndroid,
} from 'react-native';
import SplashLogo from '../../assets/Group2758.svg';

const Splash = ({navigation}) => {
  // const requestCameraPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.CAMERA,
  //       {
  //         title: 'Cool Photo App Camera Permission',
  //         message:
  //           'Cool Photo App needs access to your camera ' +
  //           'so you can take awesome pictures.',
  //         buttonNeutral: 'Ask Me Later',
  //         buttonNegative: 'Cancel',
  //         buttonPositive: 'OK',
  //       },
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log('You can use the camera');
  //     } else {
  //       console.log('Camera permission denied');
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboard');
    }, 3000);
  }, [navigation]);
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar barStyle="dark-content" hidden backgroundColor="#000" />
      <View style={styles.image}>
        <SplashLogo />
        <Text style={styles.txt}>Vendor</Text>
      </View>
    </SafeAreaView>
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
