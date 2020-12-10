import axios from 'axios';

import {
  HANDLE_CREATE_A_RIDE,
} from '../../actions/Home/createARide';

import apiUrl from '../env';

const createARide = (store) => (next) => (action) => {
  const tokenValue = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${tokenValue}`
    },
  };
  switch (action.type) {
    case HANDLE_CREATE_A_RIDE:
      console.log('middlewareCreateARide ok');
      const { createARide } = store.getState();
      const { auth } = store.getState();

      console.log(`'${createARide.markerLat} ${createARide.markerLng}'`);
      console.log(createARide.tags);
      axios.post(
        'http://localhost:8000/api/v1/event/add',
        {
          /*locate: '44.65876331712623 6.129169464111329',
          description: 'balade',
          tags: `${createARide.tags}`,
          datetime: `${createARide.date} ${createARide.time}`,
          duration: createARide.duration,
          maxParticipant: createARide.maxParticipant,
          slug: auth.nickname,
          users: auth.userId,*/

          lat: createARide.markerLat,
          long: createARide.markerLng,
          description: createARide.description,
          tags: createARide.tags,
          datetime: `${createARide.date} ${createARide.time}`,
          duration: createARide.duration,
          maxParticipant: createARide.maxParticipant, // problème ici
          slug: auth.nickname,
          users: auth.userId,
          
         /* Données qui fonctionnent dans insomnia
          locate: '44.65876331712623 6.129169464111329',
          description: 'balade',
          tags: [2, 3],
          datetime: '09-12-2020 02:30',
	        duration: '02:30',
          maxParticipant: 6,
          slug: 'balade',
          users: 16,
          */
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

      next(action);
      break;

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default createARide;
