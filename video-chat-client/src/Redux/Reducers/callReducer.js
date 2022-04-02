import * as callActions from "../Actions/callActions";

let initialState = {
  localStream: null,
};

const reducers = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case callActions.CALL_SET_LOCAL_STREAM:
      return {
        ...state,
        localStream: action.localStream,
      };

    default:
      return state;
  }
};

export default reducers;
