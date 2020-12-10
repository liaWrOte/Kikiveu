import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import authMiddleware from '../middlewares/auth';
import signinMiddleware from '../middlewares/signin';
import userProfileMiddleware from '../middlewares/Home/userProfile';
import createARideMiddleware from '../middlewares/Home/createARide';
import infoMiddleware from '../middlewares/Home/info';

import rootReducer from '../reducers';

// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    authMiddleware,
    signinMiddleware,
    userProfileMiddleware,
    createARideMiddleware,
    infoMiddleware,
    // ... d'autres middlewares
  ),
);

const store = createStore(
  // reducer
  rootReducer,
  // enhancer
  enhancers,
);

export default store;
