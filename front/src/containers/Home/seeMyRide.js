import { connect } from 'react-redux';

import SeeMyRide from '../../components/Home/Ride/seeMyRide';

import { getMyRide } from '../../actions/Home/myRide';
import {
  changeField,
  handlePostComment,
  loadComments,
} from '../../actions/Home/ride';

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
    dispatch(changeField(newValue));
  },
  handlePostComment: () => {
    dispatch(handlePostComment());
  },
  loadComments: () => {
    dispatch(loadComments());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SeeMyRide);
