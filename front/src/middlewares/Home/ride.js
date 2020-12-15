import axios from 'axios';

import {
  GET_RIDE_ID,
  saveRideInfos,
  HANDLE_POST_COMMENT,
  loadComments,
  LOAD_COMMENTS,
  saveComments,
} from '../../actions/Home/ride';

import apiUrl from '../env';

const rideMiddleware = (store) => (next) => (action) => {
  const tokenValue = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${tokenValue}` },
  };
  const { ride } = store.getState();
  const { auth } = store.getState();
  const { map } = store.getState();
  switch (action.type) {
    case GET_RIDE_ID:
      axios.get(
        `http://localhost:8000/api/v1/event/${action.id}`,
        config,
      )
        .then((response) => {
          // traitement si réponse est un succès
          console.log('middleware ride', response.data);
          store.dispatch(saveRideInfos(response.data[0]));
          store.dispatch(loadComments());
        })
        .catch((error) => {
          // traitement si réponse est une erreur
          console.log('erreur :', error);
        });

      next(action);
      break;

    case HANDLE_POST_COMMENT:
      // je récupère les données qui m'intéressent : email et mdp
      
      axios.post('http://localhost:8000/api/v1/comment/add', {
        users: auth.userId,
        body: ride.comment,
        events: ride.rideInfos.eventId,
      },
      config)
        .then((response) => {
          // traitement si réponse est un succès
          console.log('middleware : post comment');
          console.log(response);
          store.dispatch(loadComments());
          // console.log(localStorage.getItem('token'));
        })
        .catch((error) => {
          console.log(error);
        });
      
      next(action);
      break;

    case LOAD_COMMENTS:
      axios.get(`http://localhost:8000/api/v1/comment/${ride.rideInfos.eventId}`,
        config)
        .then((response) => {
          // traitement si réponse est un succès
          console.log('middleware : get all comments');
          console.log(response);
          store.dispatch(saveComments(response.data));
          console.log(response);
          // console.log(localStorage.getItem('token'));
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default rideMiddleware;
