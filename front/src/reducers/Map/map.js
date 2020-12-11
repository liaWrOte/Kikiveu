import {
  UPDATE_LAT,
  UPDATE_LNG,
  UPDATE_MARKERLAT,
  UPDATE_MARKERLNG,
  REFRESH_RIDE_EVENTS,
  REFRESH_MAP_COORDS,
} from '../../actions/Map';

const initialState = {
  lat: null,
  lng: null,
  markerLat: 0,
  markerLng: 0,
  rideEvents: [],
  swLatMap: 0,
  swLongMap: 0,
  neLatMap: 0,
  neLongMap: 0,
  mapCoords: [],
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
      };

    default: return { ...state };
  }
};

export default mapReducer;
