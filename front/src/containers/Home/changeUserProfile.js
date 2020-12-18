import { connect } from 'react-redux';

import ChangeUserProfile from '../../components/Home/UserProfile/changeUserProfile';

import {
  updateUserProfileField,
  handleUpdateUserProfile,
} from '../../actions/Home/changeUserProfile';

const mapStateToProps = (state) => ({
  userInfos: state.userProfile.userInfos,
  responseOk: state.userProfile.responseOk,
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
