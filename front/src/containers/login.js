import { connect } from 'react-redux';

import Login from '../components/Login';

import { updateAuthField, logIn, logOut } from '../actions/auth';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  email: state.auth.email,
  password: state.auth.password,
  isLogged: state.auth.isLogged,
  alertLoginStatus: state.alert.alertLoginStatus,
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
)(Login);
