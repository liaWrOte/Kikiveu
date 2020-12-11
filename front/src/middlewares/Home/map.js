import axios from 'axios';

import {
  REFRESH_RIDE_EVENTS,
  refreshRideEvents,
} from '../../actions/Map';

import apiUrl from '../env';

const createARide = (store) => (next) => (action) => {
  const tokenValue = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${tokenValue}` },
  };
  switch (action.type) {
    case REFRESH_RIDE_EVENTS:
      console.log('dans middleware refresh ride events');
      const { map } = store.getState();
      console.log(mapCoords._southWest.lat);
      axios.get(
        'http://localhost:8000/api/v1/event/add',
        {
          swLat: 43.84655218255184,
          swLong: 3.5170220075195058,
          neLat: 44.0225853807535,
          neLong: 3.9303826032226308,
        },
        config,
      )
        .then((response) => {
          console.log(response);
          store.dispatch(refreshRideEvents(response));
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
export default createARide;
