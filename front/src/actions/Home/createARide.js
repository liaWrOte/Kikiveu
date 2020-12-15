export const UPDATE_CREATE_A_RIDE_FIELD = 'UPDATE_CREATE_A_RIDE_FIELD';
export const HANDLE_CREATE_A_RIDE = 'HANDLE_CREATE_A_RIDE';
export const UPDATE_TAGS_FIELD = 'UPDATE_TAGS_FIELD';
export const PUT_RIDE_MARKER = 'PUT_RIDE_MARKER';

export const updateCreateARideField = (value, name) => ({
  type: UPDATE_CREATE_A_RIDE_FIELD,
  value,
  name,
});

export const updateTagsField = (value, name) => ({
  type: UPDATE_TAGS_FIELD,
  value,
  name,
});

export const handleCreateARide = (value) => ({
  type: HANDLE_CREATE_A_RIDE,
  value,
});

export const putRideMarker = () => ({
  type: PUT_RIDE_MARKER,
});
