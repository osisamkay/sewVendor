import {all} from 'redux-saga/effects';
import SignUpSaga from '../Screens/SignupScreen/SignUpSaga';

export default function* rootSaga() {
  yield all([SignUpSaga()]);
}
