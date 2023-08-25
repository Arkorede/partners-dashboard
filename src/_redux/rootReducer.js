import { combineReducers } from "redux";
import { authReducer, roleReducer,loanReducer,listLoanReducer } from "./reducers";

const rootReducer = combineReducers({
  authReducer,
  roleReducer,
  loanReducer,
  listLoanReducer
});

export default rootReducer;