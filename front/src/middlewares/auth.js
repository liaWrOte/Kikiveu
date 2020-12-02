import axios from 'axios';

import {
  LOG_IN,
  LOG_OUT,
  CHECK_LOGGED,
  saveAuthInfo,
} from 'src/actions/auth';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      console.log('middleware : login');
      const { email, password } = store.getState().auth;
      console.log(email, password);
    }

      next(action);
      break;

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default auth;
