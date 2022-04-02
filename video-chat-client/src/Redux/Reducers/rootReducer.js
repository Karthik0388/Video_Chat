import { combineReducers } from "redux";
import reducers from "./dashboardReducer";
import callReducer from "./callReducer";

const rootReducer = combineReducers({
  dashboard: reducers,
  call: callReducer,
});

export default rootReducer;
