export const GET_USER_PROFILE = 'GET_USER_PROFILE';
export const SAVE_USER_PROFILE_INFOS = 'SAVE_USER_PROFILE_INFOS';
export const SAVE_DOG_INFOS = 'SAVE_DOG_INFOS';
export const UPDATE_USER_PROFILE_FIELD = 'UPDATE_USER_PROFILE_FIELD';
export const HANDLE_UPDATE_USER_PROFILE = 'HANDLE_UPDATE_USER_PROFILE';
export const SAVE_OTHER_USER_INFO = 'SAVE_OTHER_USER_INFO';
export const SAVE_OTHER_USER_DOG_INFO = 'SAVE_OTHER_USER_DOG_INFO';
export const GET_OTHER_USER_PROFILE = 'GET_OTHER_USER_PROFILE';
export const DELETE_USER_PROFILE = 'DELETE_USER_PROFILE';

// === action creators
export const getUserProfile = () => ({
  type: GET_USER_PROFILE,
});

export const deleteUserProfile = () => ({
  type: DELETE_USER_PROFILE,
});

export const saveUserProfileInfos = (value) => ({
  type: SAVE_USER_PROFILE_INFOS,
  value,
});

export const saveDogInfos = (value) => ({
  type: SAVE_DOG_INFOS,
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

export const saveOtherUserInfo = (value) => ({
  type: SAVE_OTHER_USER_INFO,
  value,
});

export const saveOtherUserDogInfo = (value) => ({
  type: SAVE_OTHER_USER_DOG_INFO,
  value,
});

export const getOtherUserProfile = () => ({
  type: GET_OTHER_USER_PROFILE,
});
