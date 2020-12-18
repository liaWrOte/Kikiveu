import { connect } from 'react-redux';

import CreateARide from '../../components/Home/CreateARide';

import {
  updateCreateARideField,
  handleCreateARide,
  updateTagsField,
  putRideMarker,
} from '../../actions/Home/createARide';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  markerLat: state.map.markerLat,
  markerLng: state.map.markerLng,
  description: state.createARide.description,
  date: state.createARide.date,
  time: state.createARide.time,
  duration: state.createARide.duration,
  maxParticipant: state.createARide.maxParticipant,
  userId: state.auth.userId,
  canPutRideMarker: state.createARide.canPutRideMarker,
  hasRide: state.myRide.hasRide,
  avatar: state.userProfile.userInfos.avatar,
  responseOk: state.createARide.responseOk,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(updateCreateARideField(newValue, name));
  },
  handleCreateARide: () => {
    dispatch(handleCreateARide());
  },
  updateTagRide: (newValue, name) => {
    console.log('update');
    dispatch(updateTagsField(newValue, name));
  },
  putRideMarker: () => {
    dispatch(putRideMarker());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateARide);
