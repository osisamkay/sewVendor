import * as React from 'react';
import Profile from './assets/Profile.svg';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {View, Text, StyleSheet} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';

function CustomDrawerContent({progress, ...rest}) {
  return (
    <DrawerContentScrollView {...rest}>
      <View>
        <View>
          <View style={styles.container}>
            <Profile />
            <View>
              <Text style={styles.name}>NAME HERE</Text>
              <Text style={styles.number}>4.46</Text>
            </View>
          </View>
        </View>

        <DrawerItemList {...rest} labelStyle={styles.Label} />
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
