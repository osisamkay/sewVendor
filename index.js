/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import OneSignal from 'react-native-onesignal';
import {name as appName} from './app.json';
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
