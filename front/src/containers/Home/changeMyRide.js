import { connect } from 'react-redux';

import ChangeMyRide from '../../components/Home/Ride/changeMyRide';

import {
  updateRideField,
  handleUpdateRide,
  updateTagsField,
  putRideMarker,

} from '../../actions/Home/myRide';

const mapStateToProps = (state) => ({
  markerLat: state.map.markerLat,
  markerLng: state.map.markerLng,
  description: state.changeMyRide.description,
  date: state.changeMyRide.date,
  tags: state.changeMyRide.tags,
  time: state.changeMyRide.time,
  duration: state.changeMyRide.duration,
  maxParticipant: state.changeMyRide.maxParticipant,
  canPutRideMarker: state.changeMyRide.canPutRideMarker,
  initialDatetime: state.myRide.myRideInfos.eventDatetime,
  initialMaxParticipant: state.myRide.myRideInfos.eventMaxParticipant,
  initialDescription: state.myRide.myRideInfos.eventDescription,
  initialLat: state.myRide.myRideInfos.eventLat,
  initialLng: state.myRide.myRideInfos.eventLong,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(updateRideField(newValue, name));
  },
  updateTagRide: (newValue, name) => {
    console.log('update');
    dispatch(updateTagsField(newValue, name));
  },
  handleUpdateRide: () => {
    dispatch(handleUpdateRide());
  },
  putRideMarker: () => {
    dispatch(putRideMarker());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChangeMyRide);
