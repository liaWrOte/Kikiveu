import {
  SAVE_RIDE_INFOS,
  CHANGE_FIELD,
  LOAD_COMMENTS,
  SAVE_COMMENTS,
  GET_RIDE_ID,
  GET_RIDE,

} from '../../actions/Home/ride';

const initialState = {
  rideId: '',
  rideInfos: [],
  comment: '',
  commentsSection: [],
  loading: true,
};

const RideReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_RIDE_ID:
      return {
        ...state,
        rideId: action.id,
        loading: true,
      };

/*
    case GET_RIDE:
      console.log(`Action reçue, nouvelle valeur ${action.value} pour le champ rideData`);
      return {
        ...state,
        // je veux prendre le contenu de action.name et utiliser ça comme nom
        // de propriété
        loading: true,
      };
*/

    case SAVE_RIDE_INFOS:
      return {
        ...state,
        rideInfos: action.value,
        loading: false,
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
