import {
  UPDATE_AUTH_FIELD,
  SAVE_AUTH_INFO,
  LOG_OUT,
} from '../actions/signin';

const initialState = {
  dogsNumber: 1,
  dogName: 'Marla',
  sex: '',
  age: '',
  castrate: '',
  dogCondition: '',
  character: {
    dominant: 0,
    timide: 0,
    peureux: 0,
    player: 0,
    independant: 0,
    sociable: 0,
    aboyeur: 0,
    possessif: 0,
    curieux: 0,
    enApprentissage: 0,
    equilibre: 0,
    distrait: 0,
  },
  username: '',
  avatar: '/front/src/assets/imagesdog_profile.jpg/',
  email: '',
  password: '',
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

    case LOG_OUT:
      // on vide les recettes préférées
      return {
        ...state,
      };

    default: return { ...state };
  }
};

export default signinReducer;
