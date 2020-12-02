export const UPDATE_AUTH_FIELD = 'UPDATE_AUTH_FIELD';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SAVE_AUTH_INFO = 'SAVE_AUTH_INFO';
export const CHECK_LOGGED = 'CHECK_LOGGED';

export const updateAuthField = (value, name) => ({
  type: UPDATE_AUTH_FIELD,
  value,
  name,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const saveAuthInfo = (isLogged, nickname) => ({
  type: SAVE_AUTH_INFO,
  isLogged,
  nickname,
});

export const checkLogged = () => ({
  type: CHECK_LOGGED,
});
