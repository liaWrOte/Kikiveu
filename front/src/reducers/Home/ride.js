import {
  GET_RIDE,
  SAVE_RIDE_INFOS,
} from '../../actions/Home/ride';

const initialState = {
  rideData: [],
  rideInfos: [],
};

const RideReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_RIDE:
      console.log(`Action reçue, nouvelle valeur ${action.value} pour le champ rideData`);
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

    default: return { ...state };
  }
};

export default RideReducer;
