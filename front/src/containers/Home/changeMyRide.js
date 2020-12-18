import { connect } from 'react-redux';

import ChangeMyRide from '../../components/Home/Ride/changeMyRide';

import {
  updateRideField,
  handleUpdateRide,
  updateTagsMyRideField,
  putRideMarker,
} from '../../actions/Home/myRide';

const mapStateToProps = (state) => ({
  myRideInfos: state.myRide.myRideInfos,
  markerLat: state.map.markerLat,
  markerLng: state.map.markerLng,
  newDate: state.myRide.newDate,
  newTime: state.myRide.newTime,
  newTagsId: state.myRide.newTagsId,
  responseOk: state.myRide.responseOk,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(updateRideField(newValue, name));
  },
  updateTagRide: (newValue, name) => {
    console.log('update');
    dispatch(updateTagsMyRideField(newValue, name));
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
