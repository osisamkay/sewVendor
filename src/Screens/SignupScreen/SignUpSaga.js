import {put, takeEvery} from 'redux-saga/effects';
import Instance from '../../Api/Instance';

import {actionType} from './Action/ActionType';
import {registrationSuccess, registrationError} from './Action/Action.js';

const {REGISTER_USER} = actionType;

function* registerUsers({payload}) {
  try {
    const request = yield Instance.post('user/register', payload);

    if (request.status === 200) {
      let data = request.data;
      let s = data.statuscode;
      if (s === 400) {
        let err = data.error;
        yield put(registrationError(err));
      } else {
        let m = data.message;
        yield put(registrationSuccess(m));
      }
    }
  } catch (err) {
    console.log(err);
    yield put({type: 'ERROR'});
    alert('something went wrong, Please check that you are connected');
  }
}

export default function* SignUpSaga() {
  yield takeEvery(REGISTER_USER, registerUsers);
}
