import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from './Routes/OnboardingRoute';
import MeasurerTab from './Routes/MeasurerRoute/MeasurerTab';
import VendorTab from './Routes/VendorRoute/VendorTab';
import TailorTab from './Routes/TailorRoute/TailorTab';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './src/reducer/rootReducer';
import createSagaMiddleware from 'redux-saga';
import saga from './src/saga/rootSaga';
import {Root} from 'native-base';

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
          component={MeasurerTab}
        />
        <Stack.Screen
          name="Vendor"
          options={{
            headerShown: false,
          }}
          component={VendorTab}
        />
        <Stack.Screen
          name="Tailor"
          options={{
            headerShown: false,
          }}
          component={TailorTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default App;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);
export default () => {
  return (
    <Provider store={store}>
      <Root>
        <App />
      </Root>
    </Provider>
  );
};
