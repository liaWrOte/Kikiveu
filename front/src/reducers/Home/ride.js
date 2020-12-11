import {
  LOAD_RIDE,
} from '../../actions/Home/ride';

const initialState = {
  markerLat: '',
  markerLng: '',
  description: '',
  tags: [],
  date: '',
  time: '',
  duration: '',
  maxParticipant: 1,
};

const RideReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_RIDE:
      console.log(`Action reçue, nouvelle valeur ${action.value} pour le champ loadRide`);
      return {
        ...state,
        // je veux prendre le contenu de action.name et utiliser ça comme nom
        // de propriété
        [action.name]: action.value,
      };

    default: return { ...state };
  }
};

export default RideReducer;
