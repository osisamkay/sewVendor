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
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

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

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['SignUpReducer'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
let persistor = persistStore(store);
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);
export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Root>
          <App />
        </Root>
      </PersistGate>
    </Provider>
  );
};
