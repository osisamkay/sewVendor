import {put, takeEvery} from 'redux-saga/effects';
import Instance from '../../Api/Instance';
import {Toast} from 'native-base';
import {useNavigation} from '@react-navigation/native';

import {actionType} from './Action/ActionType';
import {loginUsers, loginError, loginSuccess} from './Action/Action.js';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const {LOGIN_USER, RECOVER} = actionType;

const Style = {
  width: widthPercentageToDP('88%'),
  alignSelf: 'center',
  borderRadius: 6,
};
function* LoginUsers({payload}) {
  try {
    const request = yield Instance.post('vendor/login', payload);

    if (request.status === 200) {
      let data = request.data;
      console.log(data);
      let s = data.status;
      if (!s) {
        let err = data.message;
        Toast.show({
          text: err,
          buttonText: 'Okay',
          position: 'top',
          type: 'danger',
          duration: 5000,
          style: Style,
        });
        yield put(loginError(err));
      } else {
        let m = data.message;
        Toast.show({
          text: m,
          buttonText: 'Okay',
          position: 'top',
          type: 'success',
          duration: 10000,
          style: Style,
        });
        yield put(loginSuccess(m));
      }
    }
  } catch (err) {
    console.log(err);
    yield put({type: 'ERROR'});
    alert('something went wrong, Please check that you are connected');
  }
}
function* PasswordRecovery({payload}) {
  try {
    const request = yield Instance.post('vendor/login', payload);

    if (request.status === 200) {
      let data = request.data;
      console.log(data);
      let s = data.status;
      if (!s) {
        let err = data.message;
        Toast.show({
          text: err,
          buttonText: 'Okay',
          position: 'top',
          type: 'danger',
          duration: 5000,
          style: Style,
        });
        yield put(loginError(err));
      } else {
        let m = data.message;
        Toast.show({
          text: m,
          buttonText: 'Okay',
          position: 'top',
          type: 'success',
          duration: 10000,
          style: Style,
        });
        yield put(loginSuccess(m));
      }
    }
  } catch (err) {
    console.log(err);
    yield put({type: 'ERROR'});
    alert('something went wrong, Please check that you are connected');
  }
}

export default function* LoginSaga() {
  yield takeEvery(LOGIN_USER, LoginUsers);
  yield takeEvery(RECOVER, PasswordRecovery);
}
