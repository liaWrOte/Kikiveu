import {
  UPDATE_CREATE_A_RIDE_FIELD,
  UPDATE_TAGS_FIELD,
  HANDLE_CREATE_A_RIDE,

} from '../../actions/Home/createARide';

import {
  UPDATE_MARKERLAT,
  UPDATE_MARKERLNG,
} from '../../actions/Map/map';

const initialState = {
  markerLat: '',
  markerLng: '',
  description: '',
  tags: [''],
  date: '10-12-2020',
  time: '',
  duration: '',
  maxParticipant: 0,
};

const createARideReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_MARKERLAT:
      return {
        ...state,
        markerLat: action.value,
      };

    case UPDATE_MARKERLNG:
      return {
        ...state,
        markerLng: action.value,
      };

    case UPDATE_CREATE_A_RIDE_FIELD:
      console.log(`Action reçue, nouvelle valeur ${action.value} pour le champ ${action.name}`);
      return {
        ...state,
        // je veux prendre le contenu de action.name et utiliser ça comme nom
        // de propriété
        [action.name]: action.value,
      };

    case UPDATE_TAGS_FIELD:
      console.log(`Action reçue, nouvelle valeur ${action.value} pour le champ ${action.name}`);
      return {
        ...state,
        // je veux prendre le contenu de action.name et utiliser ça comme nom
        // de propriété
        [action.name]: [action.value],
      };

    case HANDLE_CREATE_A_RIDE:
      return {
        ...state,
      };

    default: return { ...state };
  }
};

export default createARideReducer;
