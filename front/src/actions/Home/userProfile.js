export const UPDATE_USER_PROFILE_FIELD = 'UPDATE_USER_PROFILE_FIELD';
export const HANDLE_UPDATE_USER_PROFILE = 'HANDLE_UPDATE_USER_PROFILE';

export const updateUserProfileField = (value, name) => ({
  type: UPDATE_USER_PROFILE_FIELD,
  value,
  name,
});

export const handleUpdateUserProfile = (value) => ({
  type: HANDLE_UPDATE_USER_PROFILE,
  value,
});
