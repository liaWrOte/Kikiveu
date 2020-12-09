export const UPDATE_LAT = 'UPDATE_LAT';
export const UPDATE_LNG = 'UPDATE_LNG';
export const UPDATE_MARKERLAT = 'UPDATE_MARKERLAT';
export const UPDATE_MARKERLNG = 'UPDATE_MARKERLNG';

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
