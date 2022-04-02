export const DASHBOARD_SET_USERNAME = "DASHBOARD_SET_USERNAME";
export const DASHBOARD_SET_ACTIVEUSER = "DASHBOARD_SET_ACTIVEUSER";

export const CreateUser = (username) => {
  return {
    type: DASHBOARD_SET_USERNAME,
    username,
  };
};

export const setActiveUsers = (activeUsers) => {
  return {
    type: DASHBOARD_SET_ACTIVEUSER,
    activeUsers
  };
}
