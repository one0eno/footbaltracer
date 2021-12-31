import { combineReducers } from "redux";
//import { uiReducers } from "./uiReducers";

import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
});
