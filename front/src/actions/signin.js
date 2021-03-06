export const UPDATE_SIGNIN_FIELD = 'UPDATE_SIGNIN_FIELD';
export const SIGN_IN = 'SIGN_IN';
export const SAVE_SIGNIN_INFO = 'SAVE_SIGNIN_INFO';
export const CHECK_LOGGED = 'CHECK_LOGGED';
export const UPDATE_SRC = 'UPDATE_SRC';
export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';
export const CHANGE_CHECKBOX_FIELD = 'CHANGE_CHECKBOX_FIELD';

export const updateSigninField = (value, name) => ({
  type: UPDATE_SIGNIN_FIELD,
  value,
  name,
});

export const signin = (value) => ({
  type: SIGN_IN,
  value,
});

export const saveSigninInfo = (isLogged, nickname) => ({
  type: SAVE_SIGNIN_INFO,
  isLogged,
  nickname,
});

export const uploadImage = (image) => ({
  type: UPLOAD_IMAGE,
  image,
});

export const changeCheckboxField = () => ({
  type: CHANGE_CHECKBOX_FIELD,
});

