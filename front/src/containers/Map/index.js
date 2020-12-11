import { connect } from 'react-redux';

import {
  updateLat,
  updateLng,
  updateMarkerLat,
  updateMarkerLng,
  refreshRideEvents,
  refreshMapCoords,
} from '../../actions/Map';

import Map from '../../components/microComponents/Map';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  lat: state.map.lat,
  lng: state.map.lng,
  markerLat: state.map.markerLat,
  markerLng: state.map.markerLng,
  rideEvents: state.map.rideEvents,
  swLatMap: state.map.swLatMap,
  swLongMap: state.map.swLongMap,
  neLatMap: state.map.neLatMap,
  neLongMap: state.map.neLongMap,
});

const mapDispatchToProps = (dispatch) => ({
  changeLat: (newValue) => {
    // console.log(`Nouvelle valeur ${newValue} pour le champ ${name}`);
    dispatch(updateLat(newValue));
  },
  changeLng: (newValue) => {
    // console.log(`Nouvelle valeur ${newValue} pour le champ ${name}`);
    dispatch(updateLng(newValue));
  },
  changeMarkerLat: (newValue) => {
    // console.log(`Nouvelle valeur ${newValue} pour le champ ${name}`);
    dispatch(updateMarkerLat(newValue));
  },
  changeMarkerLng: (newValue) => {
    // console.log(`Nouvelle valeur ${newValue} pour le champ ${name}`);
    dispatch(updateMarkerLng(newValue));
  },
  refreshRideEvents: (newValue) => {
    console.log('refresh');
    dispatch(refreshRideEvents(newValue));
  },
  refreshMapCoords: (name, value) => {
    dispatch(refreshMapCoords(name, value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
