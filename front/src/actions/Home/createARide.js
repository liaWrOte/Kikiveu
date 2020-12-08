export const UPDATE_CREATE_A_RIDE_FIELD = 'UPDATE_CREATE_A_RIDE_FIELD';
export const HANDLE_UPDATE_CREATE_A_RIDE= 'HANDLE_UPDATE_CREATE_A_RIDE';

export const updateCreateARideField = (value, name) => ({
  type: UPDATE_CREATE_A_RIDE_FIELD,
  value,
  name,
});

export const handleUpdateCreateARide = (value) => ({
  type: HANDLE_UPDATE_CREATE_A_RIDE,
  value,
});
