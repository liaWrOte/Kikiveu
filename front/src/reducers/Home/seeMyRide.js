import {
  SAVE_MY_RIDE_INFOS,
} from '../../actions/Home/myRide';

import {
  CHANGE_FIELD,
  LOAD_COMMENTS,
  SAVE_COMMENTS,
} from '../../actions/Home/ride';

const initialState = {
  myRideInfos: [],
  myRideLoading: true,
  comment: '',
  commentsSection: [],
};

const seeMyRideReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_MY_RIDE_INFOS:
      return {
        ...state,
        myRideInfos: action.value,
        myRideLoading: false,
      };
    case CHANGE_FIELD:
      console.log('action reçue dans comment');
      return {
        ...state,
        comment: action.value,
      };

    case SAVE_COMMENTS:
      console.log('action reçue pour comments section');
      return {
        ...state,
        commentsSection: action.value,
      };
    default: return { ...state };
  }
};

export default seeMyRideReducer;
