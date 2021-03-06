import axios from 'axios';

import {
  SIGN_IN,
  saveSigninInfo,
} from '../actions/signin';

import { saveAuthInfo } from '../actions/auth';

import { handleErrorSignin, handleErrorPassword } from '../actions/Home/alertMessage';

import apiUrl from './env';

const signin = (store) => (next) => (action) => {
  switch (action.type) {
    case SIGN_IN:
      const { signin } = store.getState();
      if (signin.password1 === signin.password2) {
        if (signin.username
          && signin.email
          && signin.email
          && signin.password1
          && signin.dogName
          && signin.avatar
          && signin.sex
          && signin.dogCondition
          && signin.character
          && signin.age
          && signin.castrate
          && signin.acceptCGU
        ) {
          axios.post(`${apiUrl}/signin`, {
            slug: signin.username,
            pseudo: signin.username,
            email: signin.email,
            password: signin.password1,
          }, {
            withCredentials: true,
          })
            .then((response) => {
            // traitement si réponse est un succès
              store.dispatch(saveAuthInfo(response.data.logged, response.data.pseudo, response.data.id));
              const { auth } = store.getState();
              console.log(response);
              console.log(signin.avatar.data);
              console.log(signin.avatar.filename);
              axios.post(`${apiUrl}/dog/add`, {
                name: signin.dogName, //
                filename: signin.avatar.filename,
                data: signin.avatar.data, //
                sex: signin.sex, //
                state: signin.dogCondition,
                temperament: signin.character, //
                age: signin.age, //
                castrate: signin.castrate, //
                users: auth.userId,
              }, {
                withCredentials: true,
              })
                .then((response2) => {
                  console.log(response2);
                  store.dispatch(saveSigninInfo(response.data.logged, response.data.pseudo));
                  if (response.status === 200) {
                    window.location = '/connexion';
                    store.dispatch(handleErrorSignin());
                  }
                })
                .catch((error) => {
                  // traitement si réponse est une erreur
                  console.log('erreur :', error);
                });
            })
            .catch((error) => {
              // traitement si réponse est une erreur
              console.log('erreur :', error);
            });
        }
        else {
          store.dispatch(handleErrorSignin());
        }
      }
      else {
        store.dispatch(handleErrorPassword());
        store.dispatch(handleErrorSignin());
      }

      next(action);
      break;

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default signin;
