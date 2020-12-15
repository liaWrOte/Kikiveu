import { connect } from 'react-redux';

import Ride from '../../components/Home/Ride';

import {
  changeField,
  handlePostComment,
  loadComments,
  getRideId
} from '../../actions/Home/ride';

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
  comment: state.ride.comment,
  rideEvents: state.map.rideEvents,
  rideInfos: state.ride.rideInfos,
  rideId: state.ride.rideId,
  commentsSection: state.ride.commentsSection,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue) => {
    dispatch(changeField(newValue));
  },
  handlePostComment: () => {
    dispatch(handlePostComment());
  },
  loadComments: () => {
    dispatch(loadComments());
  },
  getRideId: (id) => {
    dispatch(getRideId(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ride);
