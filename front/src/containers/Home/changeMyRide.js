import { connect } from 'react-redux';

import ChangeMyRide from '../../components/Home/Ride/changeMyRide';

import {
  updateRideField,
  handleUpdateRide,
  updateTagsField,
  putRideMarker,

} from '../../actions/Home/myRide';

const mapStateToProps = (state) => ({
  myRideInfos: state.myRide.myRideInfos,
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
