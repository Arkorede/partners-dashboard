import { combineReducers } from "redux";
<<<<<<< HEAD
import { authReducer, roleReducer, createReducer } from "./reducers";

const rootReducer = combineReducers({
  authReducer,
  createReducer,
  roleReducer
=======
import { authReducer, roleReducer,loanReducer,listLoanReducer } from "./reducers";

const rootReducer = combineReducers({
  authReducer,
  roleReducer,
  loanReducer,
  listLoanReducer
>>>>>>> 2602306abbd0313ccf744347696f3e174ca5bd26
});

export default rootReducer;