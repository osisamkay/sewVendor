import {actionType} from './ActionType';

const {
  REGISTER_USER,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  LOGIN_USER,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  CLOSE_ERROR,
  CLOSE_SUCCESS,
  TRIP_DETAIL_ONE,
  TRIP_DETAIL_TWO,
} = actionType;

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
export const UserLogin = payload => ({
  type: LOGIN_USER,
  payload,
});

export const loginError = payload => ({
  type: LOGIN_ERROR,
  payload,
});
export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload,
});
export const closeError = payload => ({
  type: CLOSE_ERROR,
  payload,
});
export const closeSuccess = payload => ({
  type: CLOSE_SUCCESS,
  payload,
});
export const firstTripDetails = payload => ({
  type: TRIP_DETAIL_ONE,
  payload,
});
export const SECONDTripDetails = payload => ({
  type: TRIP_DETAIL_TWO,
  payload,
});
