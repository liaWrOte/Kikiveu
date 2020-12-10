import { connect } from 'react-redux';

import { updateLat, updateLng, updateMarkerLat, updateMarkerLng } from '../../actions/Map/map';

import Map from '../../components/microComponents/Map';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  lat: state.map.lat,
  lng: state.map.lng,
  markerLat: state.map.markerLat,
  markerLng: state.map.markerLng,
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
