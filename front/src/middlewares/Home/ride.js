import axios from 'axios';

import {
  LOAD_RIDE,
  GET_RIDE,
} from '../../actions/Home/ride';

import apiUrl from '../env';

const ride = (store) => (next) => (action) => {
  const tokenValue = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${tokenValue}` },
  };
  switch (action.type) {
    case LOAD_RIDE:
      console.log('middlewareCreateARide ok');
      const { createARide } = store.getState();
      const { auth } = store.getState();

      console.log(`'${createARide.markerLat} ${createARide.markerLng}'`);
      console.log(createARide.tags);
      axios.post(
        'http://localhost:8000/api/v1/event/add',
        {
          eventLat: createARide.markerLat,
          eventLong: createARide.markerLng,
          description: createARide.description,
          tags: createARide.tags,
          datetime: `${createARide.date} ${createARide.time}`,
          duration: createARide.duration,
          maxParticipant: createARide.maxParticipant, // problème ici
          slug: auth.nickname,
          users: auth.userId,
        },
        config,
      )
        .then((response) => {
        // traitement si réponse est un succès
          console.log('response');
          console.log(response);
        })
        .catch((error) => {
        // traitement si réponse est une erreur
          console.log('erreur :', error);
        });

      break;

    case GET_RIDE:
      const { map } = store.getState();
      axios.get(
        `http://localhost:8000/api/v1/event/${map.rideDataId}`,
        config,
      )
        .then((response) => {
          // traitement si réponse est un succès
          console.log('response');
          console.log(response);
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
