import {
  SAVE_USER_PROFILE_INFOS,
  SAVE_DOG_INFOS,
} from '../../actions/Home/changeUserProfile';

const initialState = {
  userInfos: [],
  dogInfos: [],
  loading: true,
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

    default: return { ...state };
  }
};

export default userProfileReducer;
