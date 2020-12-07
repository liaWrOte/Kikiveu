import { combineReducers } from 'redux';
// on importe tous les reducers
import authReducer from './auth';
import signinReducer from './signin';

// etc
// le reducer principal, qui regroupe les autres
// combineReducers prend en argument un objet qui indique un nom pour
// chaque reducer
const rootReducer = combineReducers({
  auth: authReducer,
  signin: signinReducer,
  // etc
});
export default rootReducer;
