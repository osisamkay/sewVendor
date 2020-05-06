import React, {useState, useEffect, useCallback} from 'react';
import Profile from './assets/Profile.svg';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {View, Text, StyleSheet} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {logoutUser} from './src/Screens/LoginScreen/Action/Action';

function CustomDrawerContent({progress, navigation, ...rest}) {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState(false);
  // const [result] = useProfile();
  const {loading, userData, isLogged} = useSelector(
    state => state.LoginReducer,
  );

  const dispatch = useDispatch();
  //
  useEffect(() => {
    if (isLogged) {
      let firstnamw = userData.profile.first_name;
      let lastname = userData.profile.last_name;
      const n = firstnamw + ' ' + lastname;
      setName(n);
    }
  }, [isLogged, userData]);
  return (
    <DrawerContentScrollView {...rest}>
      <View>
        <View>
          <View style={styles.container}>
            <Profile />
            <View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.number}>4.46</Text>
            </View>
          </View>
        </View>

        {/* <DrawerItemList {...rest} labelStyle={styles.Label} /> */}
        <DrawerItem
          label="Update Info"
          labelStyle={styles.Label}
          onPress={() => {
            navigation.navigate('UpdateInfo');
          }}
        />
        <DrawerItem
          label="Withdraw Options"
          labelStyle={styles.Label}
          onPress={() => {
            navigation.navigate('WithdrawOption');
          }}
        />
        <DrawerItem
          label="Bank Settings"
          labelStyle={styles.Label}
          onPress={() => {
            navigation.navigate('Bank Settings');
          }}
        />
        <DrawerItem
          label="Logout"
          labelStyle={styles.Label}
          onPress={() => {
            AsyncStorage.clear();
            dispatch(logoutUser('new'));
            navigation.navigate('Onboarding');
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, .25)',
  },
  name: {
    fontFamily: 'GT Walsheim Pro Regular Regular',
    fontSize: 20,
    color: 'white',
  },
  number: {
    fontFamily: 'GT Walsheim Pro Regular Regular',
    fontSize: 12,
    color: 'white',
  },
  Label: {
    color: '#fff',
    fontSize: heightPercentageToDP('2.4%'),
    fontFamily: 'GT Walsheim Pro Regular Regular',
  },
});
