import {actionType} from './Action/ActionType';

const {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGIN_USER,
  RECOVER,
  RECOVER_ERROR,
  RECOVER_SUCCESS,
} = actionType;

const initialState = {
  isLogged: false,
  userData: {},
  userDataInput: {},
  isError: false,
  recovered: false,
};

export const LoginReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        userDataInput: payload,
        registration: false,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        registrationMessage: payload,
        registration: true,
        loading: false,
      };

    case LOGIN_ERROR:
      return {...state, regError: payload, isError: true, loading: false};

    case RECOVER:
      return {...state, loading: true, recoverd: false};

    case RECOVER_SUCCESS:
      return {...state, loading: false, recovered: true};

    case RECOVER_ERROR:
      return {...state, loading: false, recoverd: false};

    default:
      return state;
  }
};
