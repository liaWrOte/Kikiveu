import { connect } from 'react-redux';

import CreateARide from '../../components/Home/CreateARide';

import { updateCreateARideField, handleUpdateCreateARide } from '../../actions/Home/createARide';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  locate: state.createARide.locate,
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
  handleUpdateCreateARide: () => {
    dispatch(handleUpdateCreateARide());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateARide);
