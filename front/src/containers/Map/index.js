import { connect } from 'react-redux';

import {
  updateLat,
  updateLng,
  updateMarkerLat,
  updateMarkerLng,
  refreshRideEvents,
  sendMapCoords,
  checkEventsLocation,
  refreshMapCoords,
  getRideData,
} from '../../actions/Map';

import {
  getRide,
} from '../../actions/Home/ride';

import { getUserProfile } from '../../actions/Home/changeUserProfile';

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
  haveEventsLocation: state.map.haveEventsLocation,
  canPutRideMarker: state.createARide.canPutRideMarker,
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
    console.log('refresh ride Events');
    dispatch(refreshRideEvents(newValue));
  },
  refreshMapCoords: (newValue) => {
    console.log('refresh map coords');
    dispatch(refreshMapCoords(newValue));
  },
  sendMapCoords: (value) => {
    dispatch(sendMapCoords(value));
  },
  checkEventsLocation: (value) => {
    dispatch(checkEventsLocation(value));
  },
  getUserProfile: () => {
    dispatch(getUserProfile());
  },
  getRideData: (id) => {
    dispatch(getRideData(id));
  },
  getRide: (id) => {
    dispatch(getRide(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
