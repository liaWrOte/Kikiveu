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
        dogsNumber: signin.dogsNumber,
        dogName: signin.dogsName,
        sex: signin.sex,
        age: signin.age,
        castrate: signin.castrate,
        dogCondition: signin.dogCondition,
        character: signin.character,
        picture: signin.picture,
        username: signin.username,
        avatar: '/front/src/assets/imagesdog_profile.jpg/',
        email: signin.email,
        password1: signin.password1,
        password2: signin.password2,
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
