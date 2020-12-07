import axios from 'axios';

import {
  SIGN_IN,
  CHECK_LOGGED,
  saveSigninInfo,
} from '../actions/signin';

const signin = (store) => (next) => (action) => {
  switch (action.type) {
    case SIGN_IN:
      const { signin } = store.getState();
      axios.post('http://localhost:8000/api/v1/signin', {
        slug: signin.username,
        pseudo: signin.username,
        email: signin.email,
        password: signin.password1,
      }, {
        withCredentials: true,
      })
        .then((response) => {
        // traitement si réponse est un succès
          console.log('middleware : signin');
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
export default signin;
