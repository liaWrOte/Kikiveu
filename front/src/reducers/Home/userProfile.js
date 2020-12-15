import {
  SAVE_USER_PROFILE_INFOS,
} from '../../actions/Home/changeUserProfile';

const initialState = {
  userInfos: [],
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

    default: return { ...state };
  }
};

export default userProfileReducer;
