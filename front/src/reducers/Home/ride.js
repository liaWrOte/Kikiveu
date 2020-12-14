import {
  SAVE_RIDE_INFOS,
  GET_RIDE_ID,
  GET_RIDE,
} from '../../actions/Home/ride';

const initialState = {
  rideId: '',
  rideInfos: [],
};

const RideReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_RIDE_ID:
      return {
        ...state,
        rideId: action.id,
      };
      /*
    case GET_RIDE:
      console.log(`Action reçue, nouvelle valeur ${action.value} pour le champ rideData`);
      return {
        ...state,
        // je veux prendre le contenu de action.name et utiliser ça comme nom
        // de propriété
        rideInfos: action.value,
      };
      */

    case SAVE_RIDE_INFOS:
      return {
        ...state,
        rideInfos: action.value,
      };

    default: return { ...state };
  }
};

export default RideReducer;
