import { connect } from 'react-redux';

import ChangeUserProfile from '../../components/Home/UserProfile/changeUserProfile';

import {
  updateUserProfileField,
  handleUpdateUserProfile,
} from '../../actions/Home/changeUserProfile';

const mapStateToProps = (state) => ({
  userInfos: state.userProfile.userInfos,
  avatar: state.userProfile.userInfos.avatar,
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
)(ChangeUserProfile);
