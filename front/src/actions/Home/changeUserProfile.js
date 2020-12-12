export const GET_USER_PROFILE = 'GET_USER_PROFILE';
export const SAVE_USER_PROFILE_INFOS = 'SAVE_USER_PROFILE_INFOS';
export const UPDATE_USER_PROFILE_FIELD = 'UPDATE_USER_PROFILE_FIELD';
export const HANDLE_UPDATE_USER_PROFILE = 'HANDLE_UPDATE_USER_PROFILE';

// === action creators
export const getUserProfile = () => ({
  type: GET_USER_PROFILE,
});

export const saveUserProfileInfos = (value) => ({
  type: SAVE_USER_PROFILE_INFOS,
  value,
});

export const updateUserProfileField = (value, name) => ({
  type: UPDATE_USER_PROFILE_FIELD,
  value,
  name,
});

export const handleUpdateUserProfile = (value) => ({
  type: HANDLE_UPDATE_USER_PROFILE,
  value,
});
