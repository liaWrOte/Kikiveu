import axios from 'axios';

import {
  GET_RIDE_ID,
  saveRideInfos,
} from '../../actions/Home/ride';

import apiUrl from '../env';

const ride = (store) => (next) => (action) => {
  const tokenValue = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${tokenValue}` },
  };
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
        })
        .catch((error) => {
          // traitement si réponse est une erreur
          console.log('erreur :', error);
        });

      next(action);
      break;

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default ride;
