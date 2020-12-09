import { connect } from 'react-redux';

import CreateARide from '../../components/Home/CreateARide';

import { updateCreateARideField, handleCreateARide } from '../../actions/Home/createARide';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  markerLat: state.map.markerLat,
  markerLng: state.map.markerLng,
  description: state.createARide.description,
  datetime: state.createARide.datetime,
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateARide);
