import {
  UPDATE_CREATE_A_RIDE_FIELD,
  HANDLE_UPDATE_CREATE_A_RIDE,
} from '../../actions/Home/createARide';

const initialState = {
  locate: '',
  description: '',
  tagId: 0,
  date: '',
  time: '',
  duration: '',
  maxParticipant: '',
};

const createARideReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_CREATE_A_RIDE_FIELD:
      console.log(`Action reçue, nouvelle valeur ${action.value} pour le champ ${action.name}`);
      return {
        ...state,
        // je veux prendre le contenu de action.name et utiliser ça comme nom
        // de propriété
        [action.name]: action.value,
      };

    case HANDLE_UPDATE_CREATE_A_RIDE:
      return {
        ...state,
      };

    default: return { ...state };
  }
};

export default createARideReducer;
