import { connect } from 'react-redux';

import UserProfile from '../../components/Home/UserProfile';

import {
  updateUserProfileField,
  handleUpdateUserProfile,
} from '../../actions/Home/userProfile';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  avatar: state.userProfile.avatar,
  mood: state.userProfile.mood,
  shape: state.userProfile.mood,
  username: state.userProfile.username,
  signedIn: state.userProfile.signedIn,
  castrate: state.userProfile.castrate,
  coords: state.userProfile.coords,
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
)(UserProfile);
