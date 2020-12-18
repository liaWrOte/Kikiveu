import { combineReducers } from 'redux';
// on importe tous les reducers
import authReducer from './auth';
import signinReducer from './signin';
import userProfileReducer from './Home/userProfile';
import createARideReducer from './Home/createARide';
import mapReducer from './Map/map';
import infoReducer from './Home/info';
import rideReducer from './Home/ride';
import seeMyRideReducer from './Home/seeMyRide';
import alertReducer from './Home/alertMessage';

// etc
// le reducer principal, qui regroupe les autres
// combineReducers prend en argument un objet qui indique un nom pour
// chaque reducer
const rootReducer = combineReducers({
  auth: authReducer,
  signin: signinReducer,
  userProfile: userProfileReducer,
  createARide: createARideReducer,
  map: mapReducer,
  info: infoReducer,
  ride: rideReducer,
  myRide: seeMyRideReducer,
  alert: alertReducer,
  // etc
});
export default rootReducer;
