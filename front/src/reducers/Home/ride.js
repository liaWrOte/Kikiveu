import {
  GET_RIDE,
  SAVE_RIDE_INFOS,
  CHANGE_FIELD,
  LOAD_COMMENTS,
  SAVE_COMMENTS,
} from '../../actions/Home/ride';

const initialState = {
  rideData: [],
  rideInfos: [],
  comment: '',
  commentsSection: [],
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
      console.log('action reçue dans comment');
      return {
        ...state,
        comment: action.value,
      };

    case SAVE_COMMENTS:
      console.log('action reçue pour comments section');
      return {
        ...state,
        commentsSection: action.value,
      };

    default: return { ...state };
  }
};

export default RideReducer;
