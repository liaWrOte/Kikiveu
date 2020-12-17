import { connect } from 'react-redux';

import Home from '../../components/Home';

const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  email: state.auth.email,
  password: state.auth.password,
  isLogged: state.auth.isLogged,
  loadingRide: state.ride.loading,
  loadingUserProfile: state.userProfile.loading,
  loadingOtherProfile: state.userProfile.loadingOtherUserProfile,
  hasRide: state.myRide.hasRide,
  myRideLoading: state.myRide.myRideLoading,
});

const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
