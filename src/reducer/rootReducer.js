import {actionType} from '../actions/ActionType';

const {
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  CLOSE_ERROR,
  CLOSE_SUCCESS,
  TRIP_DETAIL_ONE,
  TRIP_DETAIL_TWO,
} = actionType;

const initialState = {
  email: '',
  isLogged: false,
  userData: {},
  registration: false,
  registrationMessage: '',
  regError: '',
  isError: false,
  logError: '',
  tripDetsOne: {},
  tripDetsTwo: {},
};

export const rootReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case REGISTRATION_SUCCESS:
      return {...state, registrationMessage: payload, registration: true};
    case REGISTRATION_ERROR:
      return {...state, regError: payload, isError: true};
    case LOGIN_ERROR:
      return {...state, logError: payload, isError: true};
    case LOGIN_SUCCESS:
      return {...state, userData: payload, isLogged: true};
    case CLOSE_ERROR:
      return {...state, isError: payload};
    case CLOSE_SUCCESS:
      return {...state, registration: payload};
    case TRIP_DETAIL_ONE:
      return {...state, tripDetsOne: payload};
    case TRIP_DETAIL_TWO:
      return {...state, tripDetsTwo: payload};
    default:
      return state;
  }
};
