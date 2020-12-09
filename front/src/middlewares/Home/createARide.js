import axios from 'axios';

import {
  HANDLE_CREATE_A_RIDE,
} from '../../actions/Home/createARide';

import apiUrl from '../env';

const createARide = (store) => (next) => (action) => {
  const tokenValue = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${tokenValue}` },
  };
  switch (action.type) {
    case HANDLE_CREATE_A_RIDE:
      console.log('middlewareCreateARide ok')
      const { createARide } = store.getState();
      const { auth } = store.getState();
      axios.post(
        'http://localhost:8000/api/v1/event/add',
        {
          slug: createARide.slug,
          description: createARide.description,
          maxParticipant: createARide.maxParticipant,
          duration: createARide.duration,
          datetime: `${createARide.date} ${createARide.time}`,
          locate: `${createARide.markerLat} ${createARide.markerLng}`,
          users: auth.userId,
          tags: createARide.tags,
        },
        config,
      )
      .then((response) => {
        // traitement si réponse est un succès
          console.log('response');
          console.log(response);
        })
     /* axios.post('http://localhost:8000/api/v1/event/add', {
        token: localStorage.getItem('token'),
      }, {
        withCredentials: true,
      })
      

        .catch((error) => {
        // traitement si réponse est une erreur
          console.log('erreur :', error);
        });

      next(action);
      break;*/

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default createARide;
