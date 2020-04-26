import {actionType} from './ActionType';

const {
  LOGIN_USER,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  RECOVER_ERROR,
  RECOVER_SUCCESS,
  RECOVER,
} = actionType;

export const loginUser = payload => ({
  payload,
  type: LOGIN_USER,
});

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload,
});
export const loginError = payload => ({
  type: LOGIN_ERROR,
  payload,
});
export const recoverPassword = payload => ({
  type: RECOVER,
  payload,
});
export const recoverPasswordSuccess = payload => ({
  type: RECOVER_SUCCESS,
  payload,
});
export const recoverPasswordError = payload => ({
  type: RECOVER_ERROR,
  payload,
});
