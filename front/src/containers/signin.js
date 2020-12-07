import { connect } from 'react-redux';

import SigninForm from '../components/SigninForm';

import { updateSigninField, signin } from '../actions/signin';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  dogsNumber: state.signin.dogsNumber,
  dogName: state.signin.dogName,
  sex: state.signin.sex,
  age: state.signin.age,
  castrate: state.signin.castrate,
  dogConditionId: state.signin.dogCondition,
  character: state.signin.character,
  username: state.signin.username,
  avatar: state.signin.avatar,
  email: state.signin.email,
  password1: state.signin.password1,
  password2: state.signin.password2,
});

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: callback qui contient un appel à dispatch
  changeField: (newValue, name) => {
    // console.log(`Nouvelle valeur ${newValue} pour le champ ${name}`);
    dispatch(updateSigninField(newValue, name));
    // dispatch(updateSrc(srcValue));
  },
  /*
  updateSrcImage: (value) => {
    dispatch(updateSrc(value));
  },
  */
  handleSignIn: () => {
    // console.log('handleLogin');
    dispatch(signin());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SigninForm);
