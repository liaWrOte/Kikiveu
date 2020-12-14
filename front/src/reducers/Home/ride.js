import {
  GET_RIDE,
  SAVE_RIDE_INFOS,
  CHANGE_FIELD,
} from '../../actions/Home/ride';

const initialState = {
  rideData: [],
  rideInfos: [],
  comment: '',
};

const RideReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_RIDE:
      console.log(`Action reçue, nouvelle valeur ${action.value} pour le champ loadRide`);
      return {
        ...state,
        // je veux prendre le contenu de action.name et utiliser ça comme nom
        // de propriété
        rideData: action.value,
      };

    case SAVE_RIDE_INFOS:
      return {
        ...state,
        rideInfos: action.value,
      };

    case CHANGE_FIELD:
      return {
        ...state,
        comment: action.value,
      };

    default: return { ...state };
  }
};

export default RideReducer;
