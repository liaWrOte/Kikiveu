import {
  SAVE_MY_RIDE_INFOS,
  HAS_RIDE,
  UPDATE_RIDE_FIELD,
  HANDLE_UPDATE_RIDE,
  UPDATE_TAGS_MY_RIDE_FIELD,
  PUT_RIDE_MARKER,
  HANDLE_POST_MY_COMMENT,
  SAVE_MY_COMMENT,
  LOAD_MY_COMMENTS,
  CHANGE_MY_FIELD,

} from '../../actions/Home/myRide';

import {
  UPDATE_MARKERLAT,
  UPDATE_MARKERLNG,
} from '../../actions/Map';

const initialState = {
  myRideInfos: {},
  myRideLoading: true,
  comment: '',
  commentsSection: [],
  hasRide: false,
  newDate: '',
  newTime: '',
  newTagsId: [],
};

const seeMyRideReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_RIDE_FIELD:
      console.log(`Action reçue, nouvelle valeur ${action.value} pour le champ ${action.name}`);
      return {
        ...state,
        // je veux prendre le contenu de action.name et utiliser ça comme nom
        // de propriété
        myRideInfos: {
          ...state.myRideInfos,
          [action.name]: action.value,
        },
      };
    case HAS_RIDE:
      return {
        ...state,
        hasRide: action.value,
      };
    case SAVE_MY_RIDE_INFOS:
      return {
        ...state,
        myRideInfos: action.value,
        myRideLoading: false,
      };
      
    case CHANGE_MY_FIELD:
      console.log('action reçue dans comment');
      return {
        ...state,
        comment: action.value,
      };

    case SAVE_MY_COMMENT:
      console.log('action reçue pour comments section');
      return {
        ...state,
        commentsSection: action.value,
      };

    case UPDATE_TAGS_MY_RIDE_FIELD:
      console.log(`Action reçue, nouvelle valeur ${action.value} pour le champ ${action.name}`);
      return {
        ...state,
        [action.name]: action.value,
      };

    case PUT_RIDE_MARKER:
      console.log('reducer put ride marker');
      const myRideState = { ...state };

      var markerStatus = myRideState.canPutRideMarker;
      if (markerStatus) {
        return {
          ...state,
          canPutRideMarker: false,
        };
      }
      return {
        ...state,
        canPutRideMarker: true,
      };

    case HANDLE_UPDATE_RIDE:
      return {
        ...state,
      };

    default: return { ...state };
  }
};

export default seeMyRideReducer;
