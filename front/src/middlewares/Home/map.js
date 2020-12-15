import axios from 'axios';

import {
  REFRESH_MAP_COORDS,
  SEND_MAP_COORDS,
  REFRESH_RIDE_EVENTS,
  checkEventsLocation,
  refreshRideEvents,
  GET_USERS,
} from '../../actions/Map';

import apiUrl from '../env';

const map = (store) => (next) => (action) => {
  const tokenValue = localStorage.getItem('token');
  const config = {
    headers: { Authorization: `Bearer ${tokenValue}` },
  };
  switch (action.type) {
    case SEND_MAP_COORDS:
      console.log('dans middleware refresh ride events');
      const { map } = store.getState();
      const { ride } = store.getState();
      console.log(map.mapCoords._southWest.lat);
      axios.post(
        'http://localhost:8000/api/v1/event',
        {
          swLat: map.mapCoords._southWest.lat,
          swLong: map.mapCoords._southWest.lng,
          neLat: map.mapCoords._northEast.lat,
          neLong: map.mapCoords._northEast.lng,
        },
        config,
      )
        .then((response) => {
          console.log(response);
          store.dispatch(checkEventsLocation(true));
          store.dispatch(refreshRideEvents(response.data.events));
          axios.post(
            'http://localhost:8000/api/v1/user',
            {
              swLat: map.mapCoords._southWest.lat,
              swLong: map.mapCoords._southWest.lng,
              neLat: map.mapCoords._northEast.lat,
              neLong: map.mapCoords._northEast.lng,
            },
            config,
          )
            .then((response2) => {
              console.log(response2);

            })
            .catch((error2) => {
              console.log(error2);
            });
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;

      /*case GET_USERS:
      console.log('dans middleware get users on map');
      console.log(map.mapCoords._southWest.lat);
      axios.post(
        'http://localhost:8000/api/v1/user',
        {
          swLat: map.mapCoords._southWest.lat,
          swLong: map.mapCoords._southWest.lng,
          neLat: map.mapCoords._northEast.lat,
          neLong: map.mapCoords._northEast.lng,
        },
        config,
      )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;*/

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};
export default map;
