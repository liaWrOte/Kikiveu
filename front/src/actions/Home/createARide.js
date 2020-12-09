export const UPDATE_CREATE_A_RIDE_FIELD = 'UPDATE_CREATE_A_RIDE_FIELD';
export const HANDLE_CREATE_A_RIDE = 'HANDLE_CREATE_A_RIDE';

export const updateCreateARideField = (value, name) => ({
  type: UPDATE_CREATE_A_RIDE_FIELD,
  value,
  name,
});

export const handleCreateARide = (value) => ({
  type: HANDLE_CREATE_A_RIDE,
  value,
});
