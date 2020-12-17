export const GET_MY_RIDE = 'GET_MY_RIDE';
export const SAVE_MY_RIDE_INFOS = 'SAVE_MY_RIDE_INFOS';
export const UPDATE_RIDE_FIELD = 'UPDATE_RIDE_FIELD';
export const HANDLE_UPDATE_RIDE = 'HANDLE_UPDATE_RIDE';
export const PUT_RIDE_MARKER = 'PUT_RIDE_MARKER';
export const UPDATE_TAGS_FIELD = 'UPDATE_TAGS_FIELD';
export const DELETE_MY_RIDE = 'DELETE_MY_RIDE';
export const HAS_RIDE = 'HAS_RIDE';

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

export const updateTagsField = (value, name) => ({
  type: UPDATE_TAGS_FIELD,
  value,
  name,
});

export const putRideMarker = () => ({
  type: PUT_RIDE_MARKER,
});

export const handleUpdateRide = (value) => ({
  type: HANDLE_UPDATE_RIDE,
  value,
});

export const deleteMyRide = () => ({
  type: DELETE_MY_RIDE,
});

export const hasRide = (value) => ({
  type: HAS_RIDE,
  value,
});
