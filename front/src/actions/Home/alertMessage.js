export const ERROR_LOGIN = 'ERROR_LOGIN';
export const HANDLE_ERROR_SIGNIN = 'HANDLE_ERROR_SIGNIN';
export const HANDLE_ERROR_PASSWORD = 'HANDLE_ERROR_PASSWORD';

export const handleErrorLogin = () => ({
  type: ERROR_LOGIN,
});

export const handleErrorSignin = () => ({
  type: HANDLE_ERROR_SIGNIN,
});

export const handleErrorPassword = () => ({
  type: HANDLE_ERROR_PASSWORD,
});
