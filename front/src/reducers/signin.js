import {
  UPDATE_AUTH_FIELD,
  SAVE_AUTH_INFO,
  LOG_OUT,
  SIGN_IN,
} from '../actions/signin';

const initialState = {
  dogsNumber: null,
  dogName: '',
  sex: 0,
  age: 0,
  castrate: 0,
  dogCondition: 0,
  character: [
    0, 0, 0, 0, 0,
  ],
  username: '',
  avatar: '/front/src/assets/imagesdog_profile.jpg/',
  email: '',
  password1: '',
  password2: '',
  signedIn: false,
};

const signinReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_AUTH_FIELD:
      console.log(`Action reçue, nouvelle valeur ${action.value} pour le champ ${action.name}`);

      /* si action.name vaut 'email' alors
        return {
          ...state,
          email: action.value
        };
      si action.name vaut 'password' alors
        return {
          ...state,
          password: action.value
        };
      */
      return {
        ...state,
        // je veux prendre le contenu de action.name et utiliser ça comme nom
        // de propriété
        [action.name]: action.value,
      };

    case SAVE_AUTH_INFO:
      return {
        ...state,
        isLogged: action.isLogged,
        nickname: action.nickname,
      };

    case SIGN_IN:
      // on vide les recettes préférées
      return {
        ...state,
        signedIn: action.value,
      };

    case LOG_OUT:
      // on vide les recettes préférées
      return {
        ...state,
      };

    default: return { ...state };
  }
};

export default signinReducer;
