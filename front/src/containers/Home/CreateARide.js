import { connect } from 'react-redux';

import CreateARide from '../../components/Home/CreateARide';

import {
  updateCreateARideField,
  handleCreateARide,
  updateTagsField,
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateARide);
