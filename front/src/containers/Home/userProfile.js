import { connect } from 'react-redux';

import UserProfile from '../../components/Home/UserProfile/userProfile';

import { getUserProfile } from '../../actions/Home/changeUserProfile';

const mapStateToProps = (state) => ({
  dogId: state.userProfile.userInfos.dogId,
  avatar: state.userProfile.userInfos.avatar,
  moodId: state.userProfile.userInfos.moodId,
  stateId: state.userProfile.userInfos.stateId,
  castrate: state.userProfile.userInfos.castrate,
  pseudo: state.userProfile.userInfos.pseudo,
});

const mapDispatchToProps = (dispatch) => ({
  getUserProfile: () => {
    dispatch(getUserProfile());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfile);
