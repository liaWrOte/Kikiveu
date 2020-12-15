import {
  UPDATE_LAT,
  UPDATE_LNG,
  UPDATE_MARKERLAT,
  UPDATE_MARKERLNG,
  REFRESH_RIDE_EVENTS,
  SEND_MAP_COORDS,
  CHECK_EVENTS_LOCATION,
  REFRESH_MAP_COORDS,
  SHOW_USERS_ON_MAP,
  GET_OTHER_USER_PROFILE,
} from '../../actions/Map';

const initialState = {
  lat: null,
  lng: null,
  markerLat: 0,
  markerLng: 0,
  rideEvents: [],
  mapCoords: [],
  haveEventsLocation: false,
  loadingMapCoords: true,
  usersOnMap: [],
  otherUserProfileId: '',
};

const mapReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_LAT:
      console.log(`Action reçue, nouvelle valeur ${action.value} pour le champ locate`);
      return {
        ...state,
        // je veux prendre le contenu de action.name et utiliser ça comme nom
        // de propriété
        lat: action.value,
      };

    case UPDATE_LNG:
      console.log(`Action reçue, nouvelle valeur ${action.value} pour le champ locate`);
      return {
        ...state,
        // je veux prendre le contenu de action.name et utiliser ça comme nom
        // de propriété
        lng: action.value,
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

    case REFRESH_RIDE_EVENTS:
      return {
        ...state,
        rideEvents: action.value,
      };

    case REFRESH_MAP_COORDS:
      return {
        ...state,
        mapCoords: action.value,
        loadingMapCoords: false,
      };

    case SEND_MAP_COORDS:
      return {
        ...state,
        loadingMapCoords: false,
      };

    case CHECK_EVENTS_LOCATION:
      return {
        ...state,
        haveEventsLocation: action.value,
      };

    case SHOW_USERS_ON_MAP:
      return {
        ...state,
        usersOnMap: action.value,
      };

    case GET_OTHER_USER_PROFILE:
      return {
        ...state,
        otherUserProfileId: action.id,
      };

    default: return { ...state };
  }
};

export default mapReducer;
