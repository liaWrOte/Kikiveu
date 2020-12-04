import axios from 'axios';

import {
  LOG_IN,
  LOG_OUT,
  CHECK_LOGGED,
  saveAuthInfo,
} from '../actions/auth';

import apiUrl from './env';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN:
      const { auth } = store.getState();
      axios.post(`${apiUrl}/login_check`, {
        username: auth.email,
        password: auth.password,
      }, {
        withCredentials: true,
      })
        .then((response) => {
        // traitement si réponse est un succès
          console.log('middleware : login');
          console.log(response);
          // on envoie les nouvelles infos dans notre state
          store.dispatch(saveAuthInfo(response.data.logged, response.data.pseudo));
          window.localStorage.accessToken = response.data.token;
          const config = {
            headers: { Authorization: `Bearer ${response.data.token}` },
          };

          axios.get(
            `${apiUrl}/event`,
            config,
          )
            .catch((error) => {
              console.log(error);
            })
            .then((tokenResponse) => {
              console.log(tokenResponse);
            })
            .catch((error) => {
              console.log(error);
            });
        });
      next(action);
      break;
  

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};

export default auth;
