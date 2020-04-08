import React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Logo from '../../../assets/Logo.svg';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Inputs from '../../components/Inputs';
import {Button} from 'react-native-elements';
import {LoginInput} from './LoginInputs';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.Os == 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={20}
        enabled>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.big} />
          <View style={styles.group}>
            <View style={styles.logo}>
              <Logo />
            </View>
            <View style={styles.inputContainer}>
              {LoginInput.map(data => {
                return (
                  <Inputs
                    key={data.placeholder}
                    placeholder={data.placeholder}
                  />
                );
              })}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('RecoveryScreen');
                }}>
                <Text style={styles.forgot}>Forgot Password</Text>
              </TouchableOpacity>
            </View>

            <Button
              onPress={() => {
                navigation.navigate('Measurer');
              }}
              title="Sign In"
              buttonStyle={styles.button}
              titleStyle={styles.btnTxt}
            />
          </View>
          <View style={styles.small} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    // flex: 1,
    height: heightPercentageToDP('100%'),
    // justifyContent: 'center',
  },
  big: {
    height: 133,
    width: 133,
    backgroundColor: '#5CE3D9',
    borderBottomRightRadius: 133,
    position: 'absolute',
    top: 0,
  },
  logo: {
    width: 126,
    height: 71,
  },
  group: {
    alignItems: 'center',
    height: heightPercentageToDP('75%'),
    marginTop: heightPercentageToDP('10%'),
    justifyContent: 'space-between',
  },
  inputContainer: {
    height: 137,
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#5CE3D9',
    width: 160,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnTxt: {
    color: '#3D7984',
    fontSize: 14,
  },
  small: {
    height: 54,
    width: 54,
    backgroundColor: '#5CE3D9',
    borderRadius: 50,
    position: 'absolute',
    top: heightPercentageToDP('83%'),
    left: widthPercentageToDP('78%'),
  },
  forgot: {
    textAlign: 'center',
    color: '#5CE3D9',
    fontSize: 12,
  },
});
