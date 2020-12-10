import { combineReducers } from 'redux';
// on importe tous les reducers
import authReducer from './auth';
import signinReducer from './signin';
import userProfileReducer from './Home/userProfile';
import createARideReducer from './Home/createARide';
import mapReducer from './Map/map';
import infoReducer from './Home/info';

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
  // etc
});
export default rootReducer;
