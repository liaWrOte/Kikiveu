import {
  SAVE_MY_RIDE_INFOS,
} from '../../actions/Home/myRide';

const initialState = {
  myRide: [],
};

const seeMyRideReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_MY_RIDE_INFOS:
      return {
        ...state,
        myRide: action.value,
      };

    default: return { ...state };
  }
};

export default seeMyRideReducer;
