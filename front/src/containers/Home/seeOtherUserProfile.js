import { connect } from 'react-redux';

import getOtherUserProfile from '../../actions/Home/changeUserProfile'

import seeOtherUserProfile from '../../components/Home/SeeOtherUserProfile';

const mapStateToProps = (state) => ({
  otherUserInfo: state.userProfile.otherUserInfo,
  otherUserDogInfo: state.userProfile.otherUserDogInfo,
});

const mapDispatchToProps = () => ({
  getOtherUserProfile: () => {
    dispatchEvent(getOtherUserProfile());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(seeOtherUserProfile);
