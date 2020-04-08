import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Measurer from './Routes/MeasurerRoute';
import Onboarding from './Routes/OnboardingRoute';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            drawerLabel: 'Logout',
            gestureEnabled: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Measurer"
          options={{
            headerShown: false,
          }}
          component={Measurer}
        />
        {/* <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
