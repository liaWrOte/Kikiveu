import { combineReducers } from 'redux';
// on importe tous les reducers
import authReducer from './auth';
import signinReducer from './signin';
import userProfileReducer from './Home/userProfile';
import createARideReducer from './Home/createARide';
import mapReducer from './Map/map';

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
  // etc
});
export default rootReducer;
