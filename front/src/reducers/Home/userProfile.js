import {
  SAVE_USER_PROFILE_INFOS,
  SAVE_DOG_INFOS,
  SAVE_OTHER_USER_INFO,
  SAVE_OTHER_USER_DOG_INFO,
} from '../../actions/Home/changeUserProfile';

const initialState = {
  userInfos: [],
  dogInfos: [],
  loading: true,
  otherUserInfo: [],
  otherUserDogInfo: [],
  loadingOtherUserProfile: true,
};

const userProfileReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_PROFILE_INFOS:
      return {
        ...state,
        userInfos: action.value,
        loading: false,
      };

    case SAVE_DOG_INFOS:
      return {
        ...state,
        dogInfos: action.value,
        loading: false,
      };

    case SAVE_OTHER_USER_INFO:
      return {
        ...state,
        otherUserInfo: action.value,
      };

    case SAVE_OTHER_USER_DOG_INFO:
      return {
        ...state,
        otherUserDogInfo: action.value,
        loadingOtherUserProfile: false,
      };

    default: return { ...state };
  }
};

export default userProfileReducer;
