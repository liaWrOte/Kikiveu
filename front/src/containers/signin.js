import { connect } from 'react-redux';

import SigninForm from '../components/SigninForm';

import { updateAuthField, logIn, logOut } from '../actions/signin';

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
  password: state.signinReducer.password,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  changeField: (newValue, name) => {
    // console.log(`Nouvelle valeur ${newValue} pour le champ ${name}`);
    dispatch(updateAuthField(newValue, name));
  },
  handleLogin: () => {
    // console.log('handleLogin');
    dispatch(logIn());
  },
  handleLogout: () => {
    dispatch(logOut());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SigninForm);
