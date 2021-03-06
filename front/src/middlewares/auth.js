import axios from 'axios';
import {
  LOG_IN,
  LOG_OUT,
  saveAuthInfo,
} from '../actions/auth';

import {
  handleErrorLogin,
} from '../actions/Home/alertMessage';

import apiUrl from './env';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN:
      // je récupère les données qui m'intéressent : email et mdp
      const { auth } = store.getState();
      axios.post(`${apiUrl}/login_check`, {
        username: auth.email,
        password: auth.password,
      })
        .then((response) => {
        // traitement si réponse est un succès
          console.log('middleware : login');
          console.log(response);
          // on envoie les nouvelles infos dans notre state
          store.dispatch(saveAuthInfo(response.data.logged, response.data.pseudo, response.data.id));
          localStorage.setItem('token', response.data.token);
          // console.log(localStorage.getItem('token'));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(handleErrorLogin());
        });
      next(action);
      break;
    case LOG_OUT: {
      // destruction du token stocké en localStorage
      localStorage.removeItem('token');
      // console.log(localStorage.getItem('token'));
      next(action);
      break;
    }
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};

/* si besoin de nouvelles requêtes auprès du back,
on récupère notre token avec la methode localStorage.getItem :
 .then((response) => {
          const tokenValue = localStorage.getItem('token');
        puis on envoie le token en headers au back pour obtenir la requête
          const config = {
            headers: { Authorization: `Bearer ${tokenValue}` },
          };
          axios.get(
            `${apiUrl}/event`,
            config,
          )
*/

export default authMiddleware;
