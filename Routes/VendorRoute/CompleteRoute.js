import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import Pending from '../../src/Screens/Measurer/Pending/Pending';
import Measurement from '../../src/Screens/Measurer/Measurment/Measurement';
import PendingMeasurement from '../../src/Screens/Measurer/Measurment/Measurement';
import CompleteVendor from '../../src/Screens/Vendor/Completed/Complete';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CompleteRoute({navigation}) {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="Completed Requests"
        options={{
          //   title: 'Hello User',
          headerRight: () => (
            <Ionicons
              onPress={() => {
                navigation.openDrawer();
              }}
              name="bookmark"
              size={25}
              color="black"
              style={{paddingRight: 23}}
            />
          ),
          headerLeft: () => (
            <Ionicons
              onPress={() => {
                navigation.openDrawer();
              }}
              name="bars"
              size={30}
              color="black"
              style={{paddingLeft: 23}}
            />
          ),
        }}
        component={CompleteVendor}
      />
    </Stack.Navigator>
  );
}

export default CompleteRoute;
