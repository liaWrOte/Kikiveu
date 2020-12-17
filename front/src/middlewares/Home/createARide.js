import axios from 'axios';

import {
  HANDLE_CREATE_A_RIDE,
} from '../../actions/Home/createARide';

import {
  getMyRide,
  saveMyRideInfos,
  hasRide,
} from '../../actions/Home/myRide';

import apiUrl from '../env';

const createARide = (store) => (next) => (action) => {
  const tokenValue = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${tokenValue}` },
  };

  switch (action.type) {
    case HANDLE_CREATE_A_RIDE:
      console.log('middlewareCreateARide ok');
      const { createARide } = store.getState();
      const { auth } = store.getState();

      console.log(`'${createARide.markerLat} ${createARide.markerLng}'`);
      console.log(createARide.tags);
      axios.post(
        `${apiUrl}/event/add`,
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
          store.dispatch(saveMyRideInfos(response.data));
          store.dispatch(hasRide(true));
          store.dispatch(getMyRide());
        })
        .catch((error) => {
        // traitement si réponse est une erreur
          console.log('erreur :', error);
          store.dispatch(hasRide(false));
        });

      next(action);
      break;

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default createARide;
