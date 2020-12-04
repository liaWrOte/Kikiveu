import { connect } from 'react-redux';

import SigninForm from '../components/SigninForm';

import { updateAuthField, signin, logOut } from '../actions/signin';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  dogsNumber: state.signinReducer.dogsNumber,
  dogName: state.signinReducer.dogName,
  sex: state.signinReducer.sex,
  age: state.signinReducer.age,
  castrate: state.signinReducer.castrate,
  dogCondition: state.signinReducer.dogCondition,
  character: state.signinReducer.character,
  username: state.signinReducer.username,
  avatar: state.signinReducer.avatar,
  email: state.signinReducer.email,
  password1: state.signinReducer.password1,
  password2: state.signinReducer.password2,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  changeField: (newValue, name) => {
    // console.log(`Nouvelle valeur ${newValue} pour le champ ${name}`);
    dispatch(updateAuthField(newValue, name));
  },
  handleSignIn: () => {
    // console.log('handleLogin');
    dispatch(signin());
  },
  handleLogout: () => {
    dispatch(logOut());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SigninForm);
