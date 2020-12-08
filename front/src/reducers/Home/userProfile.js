import {
  UPDATE_USER_PROFILE_FIELD,
  HANDLE_UPDATE_USER_PROFILE,
} from '../../actions/Home/userProfile';

const initialState = {
  avatar: '/front/src/assets/imagesdog_profile.jpg/',
  mood: 1,
  shape: 1,
  username: '',
  signedIn: true,
  status: false,
  coords: '',
};

const userProfileReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_USER_PROFILE_FIELD:
      console.log(`Action reçue, nouvelle valeur ${action.value} pour le champ ${action.name}`);
      return {
        ...state,
        // je veux prendre le contenu de action.name et utiliser ça comme nom
        // de propriété
        [action.name]: action.value,
      };

    case HANDLE_UPDATE_USER_PROFILE:
      return {
        ...state,
      };

    default: return { ...state };
  }
};

export default userProfileReducer;
