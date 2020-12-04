import { connect } from 'react-redux';

import SignInForm from '../../components/Login';

import { updateAuthField, logIn, logOut } from '../../actions/auth';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  dogsNumber: state.SignInForm.dogsNumber,
  dogName: state.SignInForm.dogName,
  sex: state.SignInForm.sex,
  age: state.SignInForm.age,
  castrate: state.SignInForm.castrate,
  dogCondition: state.SignInForm.dogCondition,
  character: state.SignInForm.character,
  username: state.SignInForm.pseudo,
  avatar: state.SignInForm.avatar,
  email: state.SignInForm.email,
  password: state.SignInForm.password,
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
)(SignInForm);
