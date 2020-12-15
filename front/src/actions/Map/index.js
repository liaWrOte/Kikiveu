export const UPDATE_LAT = 'UPDATE_LAT';
export const UPDATE_LNG = 'UPDATE_LNG';
export const UPDATE_MARKERLAT = 'UPDATE_MARKERLAT';
export const UPDATE_MARKERLNG = 'UPDATE_MARKERLNG';
export const REFRESH_RIDE_EVENTS = 'REFRESH_RIDE_EVENTS';
export const REFRESH_MAP_COORDS = 'REFRESH_MAP_COORDS';
export const SEND_MAP_COORDS = 'SEND_MAP_COORDS';
export const CHECK_EVENTS_LOCATION = 'CHECK_EVENTS_LOCATION';
export const GET_USERS = 'GET_USERS';

export const updateLat = (value) => ({
  type: UPDATE_LAT,
  value,
});

export const updateLng = (value) => ({
  type: UPDATE_LNG,
  value,
});

export const updateMarkerLat = (value) => ({
  type: UPDATE_MARKERLAT,
  value,
});

export const updateMarkerLng = (value) => ({
  type: UPDATE_MARKERLNG,
  value,
});

export const refreshRideEvents = (value) => ({
  type: REFRESH_RIDE_EVENTS,
  value,
});

export const refreshMapCoords = (value) => ({
  type: REFRESH_MAP_COORDS,
  value,
});

export const sendMapCoords = () => ({
  type: SEND_MAP_COORDS,
});

export const checkEventsLocation = (value) => ({
  type: CHECK_EVENTS_LOCATION,
  value,
});

export const getUsers = () => ({
  type: GET_USERS,
});
