export const GET_RIDE = 'GET_RIDE';
export const SAVE_RIDE_INFOS = 'SAVE_RIDE_INFOS';
export const GET_RIDE_ID = 'GET_RIDE_ID';

export const getRide = (value) => {
  console.log(value);
  return ({
  type: GET_RIDE,
  value,
})};

export const saveRideInfos = (value) => ({
  type: SAVE_RIDE_INFOS,
  value,
});

export const getRideId = (id) => ({
  type: GET_RIDE_ID,
  id,
});
