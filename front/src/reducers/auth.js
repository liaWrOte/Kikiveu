import {
  UPDATE_AUTH_FIELD,
  SAVE_AUTH_INFO,
  LOG_OUT,
} from '../../src/actions/auth';

const initialState = {
  // contenu de l'input pour l'adresse e-mail
  email: '',
  // contenu de l'input pour le mot de passe
  password: '',
  // indique si l'utilisateur est loggué
  isLogged: false,
  // pseudo de l'utilisateur (si loggué)
  nickname: '',
};

const auth = (state = initialState, action = {}) => {
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

export default auth;
