import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
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
import Icon from 'react-native-vector-icons/Feather';
import {loginUser} from './Action/Action';

const LoginScreen = ({navigation}) => {
  const [values, setValues] = useState({});
  const [show, setShow] = useState(true);
  const {loading, userData, isLogged} = useSelector(
    state => state.LoginReducer,
  );
  console.log(userData);
  const dispatch = useDispatch();
  const propOwn = Object.getOwnPropertyNames(values);

  useEffect(() => {
    if (isLogged) {
      let reg_type = userData.profile.vendor_category_id;
      console.log(reg_type);
      if (reg_type == 1) {
        navigation.navigate('Measurer');
      } else if (reg_type == 2) {
        navigation.navigate('Tailor');
      } else if (reg_type == 3) {
        navigation.navigate('Vendor');
      } else {
        null;
      }
    }
  }, [navigation, isLogged, userData]);
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
                    status={show}
                    textChange={value => {
                      let input = data.name;

                      setValues({
                        ...values,
                        [input]: value,
                      });
                    }}
                  />
                );
              })}
              <TouchableOpacity
                style={styles.p}
                onPress={() => {
                  setShow(!show);
                }}>
                <Icon name={!show ? 'eye-off' : 'eye'} size={20} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('RecoveryScreen');
                }}>
                <Text style={styles.forgot}>Forgot Password</Text>
              </TouchableOpacity>
            </View>

            <Button
              loading={loading}
              buttonStyle={styles.button}
              disabled={propOwn.length < 2 ? true : false}
              onPress={() => {
                dispatch(loginUser(values));
              }}
              title="Sign In"
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
  p: {
    position: 'absolute',
    top: heightPercentageToDP('9%'),
    right: widthPercentageToDP('0%'),
  },
});
