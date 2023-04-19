export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const loginSuccess = (user) => {
  return { type: LOGIN_SUCCESS, payload: user }
};

export const loginFailure = (error) => {
  return { type: LOGIN_FAILURE, payload: error }
};

export const logoutSuccess = (user) => {
  return { type: LOGIN_SUCCESS }
};

export const logoutFailure = (error) => {
  return { type: LOGIN_FAILURE, payload: error }
};