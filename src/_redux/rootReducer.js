import { combineReducers } from "redux";
import { authReducer, roleReducer, createReducer } from "./reducers";

const rootReducer = combineReducers({
  authReducer,
  createReducer,
  roleReducer
});

export default rootReducer;