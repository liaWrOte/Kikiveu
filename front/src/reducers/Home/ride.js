import {
  LOAD_RIDE,
  GET_RIDE,
} from '../../actions/Home/ride';

const initialState = {
  markerLat: '',
  markerLng: '',
  description: '',
  tags: [],
  date: '',
  time: '',
  duration: '',
  comments: [],
  maxParticipant: 1,
  rideData: [],
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

    case GET_RIDE:
      console.log(`Action reçue, nouvelle valeur ${action.value} pour le champ loadRide`);
      return {
        ...state,
        // je veux prendre le contenu de action.name et utiliser ça comme nom
        // de propriété
        rideData: action.value,
      };

    default: return { ...state };
  }
};

export default RideReducer;
