export const GET_RIDE = 'GET_RIDE';
export const SAVE_RIDE_INFOS = 'SAVE_RIDE_INFOS';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const HANDLE_POST_COMMENT = 'HANDLE_POST_COMMENT';
export const LOAD_COMMENTS = 'LOAD_COMMENTS';
export const SAVE_COMMENTS = 'SAVE_COMMENTS';

export const getRide = (value) => ({
  type: GET_RIDE,
  value,
});

export const saveRideInfos = (value) => ({
  type: SAVE_RIDE_INFOS,
  value,
});

export const changeField = (value) => ({
  type: CHANGE_FIELD,
  value,
});

export const handlePostComment = () => ({
  type: HANDLE_POST_COMMENT,
});

export const saveComments = (value) => ({
  type: SAVE_COMMENTS,
  value,
});
