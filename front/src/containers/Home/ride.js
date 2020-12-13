import { connect } from 'react-redux';

import Ride from '../../components/Home/Ride';


const mapStateToProps = (state) => ({
  // nom de la prop à remplir: donnée à récupérer dans le state
  markerLat: state.ride.markerLat,
  markerLng: state.ride.markerLng,
  description: state.ride.description,
  tags: state.ride.tags,
  date: state.ride.date,
  time: state.ride.time,
  duration: state.ride.duration,
  maxParticipant: state.ride.maxParticipant,
  comments: state.ride.comments,
  rideEvents: state.map.rideEvents,
  rideInfos: state.ride.rideInfos,
});

const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Ride);
