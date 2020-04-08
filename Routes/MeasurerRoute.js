import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

// import SelectionScreens from '../src/Screens/Measurer/selectionScreen/SelectionScreens';
// import Gallery from '../src/Screens/Measurer/Gallery/Gallery';
// import Measurement from '../src/Screens/Measurer/Measurment/Measurement';
// import Payments from '../src/Screens/Measurer/Payment/Payment';
import Homepage from '../src/Screens/Measurer/HomePage/Homepage';
import CustomDrawerContent from '../CustomDrawerContent';
// import SelectTailor from '../src/Screens/Measurer/TailorScreen/SelectTailor';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Home({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="HomePages"
      screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen
        name="HomePages"
        options={{
          title: 'Hello User',
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
        component={Homepage}
      />
      {/* <Stack.Screen
        component={SelectTailor}
        name="TailorScreen"
        options={{
          title: 'Select Tailor',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#3D7782',
            height: heightPercentageToDP('10%'),
          },
        }}
      /> */}
      {/* <Stack.Screen
        component={SelectionScreens}
        name="SelectionScreen"
        options={{
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#3D7782',
            height: heightPercentageToDP('10%'),
          },
        }}
      /> */}
    </Stack.Navigator>
  );
}

function Measurer() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#3D7782',
        width: widthPercentageToDP('80%'),
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      hideStatusBar>
      <Drawer.Screen
        name="HomePages"
        component={Home}
        options={{drawerLabel: 'Home Page', headerTitle: 'Dashboard'}}
      />
      {/* <Drawer.Screen
        name="Measurement"
        component={Measurement}
        options={{
          drawerLabel: 'My Measurement',
          headerShown: true,
          title: 'Measurement',
        }}
      /> */}

      {/* <Drawer.Screen
        name="Gallery"
        component={Gallery}
        options={{
          drawerLabel: 'Gallery',
          headerShown: true,
          title: 'Gallery',
        }}
      /> */}

      {/* <Drawer.Screen
        name="Payment"
        component={Payments}
        options={{
          drawerLabel: 'Payment',
          headerShown: true,
          title: 'Payment',
        }}
      /> */}
    </Drawer.Navigator>
  );
}

export default Measurer;
