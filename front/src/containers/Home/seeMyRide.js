import { connect } from 'react-redux';

import SeeMyRide from '../../components/Home/Ride/seeMyRide';

import { getMyRide, deleteMyRide } from '../../actions/Home/myRide';

import {
  handlePostMyComment,
  loadMyComments,
  changeMyField,
} from '../../actions/Home/myRide';

const mapStateToProps = (state) => ({
  myRideInfos: state.myRide.myRideInfos,
  comment: state.myRide.comment,
  commentsSection: state.myRide.commentsSection,
});

const mapDispatchToProps = (dispatch) => ({
  getMyRide: () => {
    dispatch(getMyRide());
  },
  changeField: (newValue) => {
    dispatch(changeMyField(newValue));
  },
  handlePostMyComment: () => {
    dispatch(handlePostMyComment());
  },
  loadMyComments: () => {
    dispatch(loadMyComments());
  },
  deleteMyRide: () => {
    dispatch(deleteMyRide());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SeeMyRide);
