import {
  UPDATE_LAT,
  UPDATE_LNG,
  UPDATE_MARKERLAT,
  UPDATE_MARKERLNG,
} from '../../actions/Map/map';

const initialState = {
  lat: '',
  lng: '',
  markerLat: '',
  markerLng: '',
};

const mapReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    /*case UPDATE_LOCATE:
      console.log(`Action reçue, nouvelle valeur ${action.value} pour le champ locate`);
      return {
        ...state,
        // je veux prendre le contenu de action.name et utiliser ça comme nom
        // de propriété
        locate: action.value,
      };

    case UPDATE_MARKER:
      return {
        ...state,
        marker: action.value,
      };*/

    default: return { ...state };
  }
};

export default mapReducer;
