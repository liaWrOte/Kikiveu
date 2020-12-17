import {
  SAVE_MY_RIDE_INFOS,
  HAS_RIDE,
  UPDATE_RIDE_FIELD,
  HANDLE_UPDATE_RIDE,
  UPDATE_TAGS_FIELD,
  PUT_RIDE_MARKER,
} from '../../actions/Home/myRide';

import {
  CHANGE_FIELD,
  LOAD_COMMENTS,
  SAVE_COMMENTS,
} from '../../actions/Home/ride';


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
};

const seeMyRideReducer = (state = initialState, action = {}) => {
  switch (action.type) {
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


    case UPDATE_TAGS_FIELD:
      console.log(`Action reçue, nouvelle valeur ${action.value} pour le champ ${action.name}`);

      const newState = { ...state };
      /* if (newState.tags.includes(action.value)) {
        newState.tags = newState.tags.remove(action.value);
      } */

      var myArray = newState.tags;

      if (myArray.includes(action.value)) {
        const index = myArray.indexOf(action.value);
        if (index > -1) {
          console.log(myArray.splice(index, 1));
          myArray.splice(index, 1);
          console.log(myArray);
          return {
            ...state,
            tags: myArray,
          };
        }
      }
      else {
        return {
          ...state,
          tags: [...newState.tags, action.value],
        };
      }

      break;

    case HANDLE_UPDATE_RIDE:
      return {
        ...state,
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
    default: return { ...state };
  }
};

export default seeMyRideReducer;
