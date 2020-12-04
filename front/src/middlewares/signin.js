import axios from 'axios';

import {
  LOG_IN,
  LOG_OUT,
  CHECK_LOGGED,
  saveAuthInfo,
} from '../actions/auth';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN:
      const { auth } = store.getState();
      axios.post('http://localhost:8000/api/v1/login_check', {
        username: auth.email,
        password: auth.password,
      }, {
        withCredentials: true,
      })
        .then((response) => {
        // traitement si réponse est un succès
          console.log('middleware : login');
          console.log(response);
        })
        .catch((error) => {
        // traitement si réponse est une erreur
          console.log('erreur :', error);
        });

      next(action);
      break;

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default auth;
