import * as dashboardActions  from "../Actions/action";

let initialState = {
  username: "",
  activeUsers:[],
};

const reducers = (state = initialState, action) => {
console.log(state, action);
  switch (action.type) {
    case dashboardActions.DASHBOARD_SET_USERNAME:
      return {
        ...state,
        username: action.username,
      };
    case dashboardActions.DASHBOARD_SET_ACTIVEUSER:
      return {
        ...state,
        activeUsers: action.activeUsers,
      };

    default:
      return state;
  }
};

export default reducers;
