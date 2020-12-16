export const GET_MY_RIDE = 'GET_MY_RIDE';
export const SAVE_MY_RIDE_INFOS = 'SAVE_MY_RIDE_INFOS';
export const UPDATE_RIDE_FIELD = 'UPDATE_RIDE_FIELD';
export const HANDLE_UPDATE_RIDE = 'HANDLE_RIDE_PROFILE';

// === action creators
export const getMyRide = () => ({
  type: GET_MY_RIDE,
});

export const saveMyRideInfos = (value) => ({
  type: SAVE_MY_RIDE_INFOS,
  value,
});

export const updateRideField = (value, name) => ({
  type: UPDATE_RIDE_FIELD,
  value,
  name,
});

export const handleUpdateRide = (value) => ({
  type: HANDLE_UPDATE_RIDE,
  value,
});
