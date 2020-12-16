import { connect } from 'react-redux';

import SeeMyRide from '../../components/Home/Ride/seeMyRide';

import { getMyRide } from '../../actions/Home/myRide';

const mapStateToProps = (state) => ({
  myRide: state.myRide,
});

const mapDispatchToProps = (dispatch) => ({
  getMyRide: () => {
    dispatch(getMyRide());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SeeMyRide);
