import {
  SAVE_USER_PROFILE_INFOS,
  SAVE_DOG_INFOS,
  SAVE_OTHER_USER_INFO,
  SAVE_OTHER_USER_DOG_INFO,
  UPDATE_USER_PROFILE_FIELD,
} from '../../actions/Home/changeUserProfile';

const initialState = {
  userInfos: [],
  dogInfos: [],
  loading: true,
  otherUserInfo: [],
  otherUserDogInfo: [],
  loadingOtherUserProfile: true,
  responseOk: true,
};

const userProfileReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_PROFILE_INFOS:
      return {
        ...state,
        userInfos: action.value,
        loading: false,
        responseOk: false,
      };

    case SAVE_DOG_INFOS:
      return {
        ...state,
        dogInfos: action.value,
        loading: true,
        responseOk: true,
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
    case UPDATE_USER_PROFILE_FIELD:
      console.log(`Action reçue, nouvelle valeur ${action.value} pour le champ ${action.name}`);
      return {
        ...state,
        // je veux prendre le contenu de action.name et utiliser ça comme nom
        // de propriété
        userInfos: {
          ...state.userInfos,
          [action.name]: action.value,
        },
      };

    default: return { ...state };
  }
};

export default userProfileReducer;
