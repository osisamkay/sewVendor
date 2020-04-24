import {actionType} from './ActionType';

const {REGISTER_USER, REGISTRATION_SUCCESS, REGISTRATION_ERROR} = actionType;

export const registerUser = payload => ({
  payload,
  type: REGISTER_USER,
});

export const registrationSuccess = payload => ({
  type: REGISTRATION_SUCCESS,
  payload,
});
export const registrationError = payload => ({
  type: REGISTRATION_ERROR,
  payload,
});
