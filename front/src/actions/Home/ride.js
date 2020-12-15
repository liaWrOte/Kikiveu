export const GET_RIDE = 'GET_RIDE';
export const SAVE_RIDE_INFOS = 'SAVE_RIDE_INFOS';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const HANDLE_POST_COMMENT = 'HANDLE_POST_COMMENT';
export const LOAD_COMMENTS = 'LOAD_COMMENTS';
export const SAVE_COMMENTS = 'SAVE_COMMENTS';
export const GET_RIDE_ID = 'GET_RIDE_ID';

export const getRide = () => ({
  type: GET_RIDE,
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

export const loadComments = () => ({
  type: LOAD_COMMENTS,
});

export const getRideId = (id) => ({
  type: GET_RIDE_ID,
  id,
});
