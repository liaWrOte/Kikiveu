import { connect } from 'react-redux';

import Ride from '../../components/Home/Ride';

import {
  updateUserProfileField,
  handleUpdateUserProfile,
} from '../../actions/Home/userProfile';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  markerLat: state.ride.markerLat,
  markerLng: state.ride.markerLng,
  description: state.ride.description,
  tags: state.ride.tags,
  date: state.ride.date,
  time: state.ride.time,
  duration: state.ride.duration,
  maxParticipant: state.ride.maxParticipant,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(updateUserProfileField(newValue, name));
  },
  handleUpdateUserProfile: () => {
    dispatch(handleUpdateUserProfile());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ride);
