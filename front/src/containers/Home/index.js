import { connect } from 'react-redux';

import Home from '../../components/Home';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  email: state.auth.email,
  password: state.auth.password,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
