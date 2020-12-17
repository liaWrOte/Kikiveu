import {
  UPDATE_SIGNIN_FIELD,
  SAVE_SIGNIN_INFO,
  SIGN_IN,
  UPDATE_SRC,
  UPLOAD_IMAGE,
  CHANGE_CHECKBOX_FIELD,
} from '../actions/signin';

const initialState = {
  dogsNumber: '',
  dogName: '',
  sex: '',
  age: '',
  castrate: '',
  dogCondition: '',
  character: '',
  picture: '',
  username: '',
  avatar: 'dog.jpeg',
  email: '',
  password1: '',
  password2: '',
  signedIn: false,
  acceptCGU: '',
};

const signinReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_SIGNIN_FIELD:
      console.log(`Action reçue, nouvelle valeur ${action.value} pour le champ ${action.name}`);
      return {
        ...state,
        // je veux prendre le contenu de action.name et utiliser ça comme nom
        // de propriété
        [action.name]: action.value,
        picture: action.srcValue,
      };

    case CHANGE_CHECKBOX_FIELD:
      return {
        ...state,
        acceptCGU: !state.acceptCGU,
      };

    case SAVE_SIGNIN_INFO:
      return {
        ...state,
        isLogged: action.isLogged,
        nickname: action.nickname,
      };

    case SIGN_IN:
      // on vide les recettes préférées
      return {
        ...state,
      };

    /*case UPDATE_SRC:
      console.log(`Action reçue, nouvelle valeur ${action.value} pour la propriété picture`);
      return {
        ...state,
        picture: action.value,
      };*/

    case UPLOAD_IMAGE:
      console.log('update image dans le state');
      return {
        ...state,
        avatar: action.image,
      };

    default: return { ...state };
  }
};

export default signinReducer;
