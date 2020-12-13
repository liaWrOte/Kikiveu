import { connect } from 'react-redux';

import ChangeUserProfile from '../../components/Home/UserProfile/changeUserProfile';

import {
  updateUserProfileField,
  handleUpdateUserProfile,
} from '../../actions/Home/changeUserProfile';

const mapStateToProps = (state) => ({
  avatar: state.changeUserProfile.avatar,
  moodId: state.changeUserProfile.moodId,
  stateId: state.changeUserProfile.stateId,
  castrate: state.changeUserProfile.castrate,
  pseudo: state.changeUserProfile.pseudo,
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
