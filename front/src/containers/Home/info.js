import { connect } from 'react-redux';

import Info from '../../components/Home/Info';

import {
  updateUserProfileField,
  handleUpdateUserProfile,
} from '../../actions/Home/info';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  avatar: state.info.avatar,
  mood: state.info.mood,
  shape: state.info.mood,
  username: state.info.username,
  signedIn: state.info.signedIn,
  status: state.info.status,
  coords: state.info.coords,
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
)(Info);
