import {
  CHANGE_STATUS,
} from '../../actions/Home/info';

const initialState = {
  avatar: '/front/src/assets/images/dog_profile.jpg',
};

const infoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_STATUS:
      console.log(`Action reçue, nouvelle valeur ${action.value} pour le champ ${action.name}`);
      return {
        ...state,
        // je veux prendre le contenu de action.name et utiliser ça comme nom
        // de propriété
        [action.name]: action.value,
      };

    default: return { ...state };
  }
};

export default infoReducer;
