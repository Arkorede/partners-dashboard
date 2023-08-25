export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const CREATE_USER_START = "CREATE_USER_START";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";

export const LIST_ROLES_START = "LIST_ROLES_START";
export const LIST_ROLES_SUCCESS = "LIST_ROLES_SUCCESS";
export const LIST_ROLES_FAILURE = "LIST_ROLES_FAILURE";

export const CREATE_LOAN_SUCCESS = "CREATE_LOAN_SUCCESS";
export const CREATE_LOAN_FAILURE = "CREATE_LOAN_FAILURE";

export const LIST_LOAN_REQUEST = "LIST_LOAN_REQUEST";
export const LIST_LOAN_SUCCESS = "LIST_LOAN_SUCCESS";
export const LIST_LOAN_FAILURE = "LIST_LOAN_FAILURE";

export const loginSuccess = (user) => {
  return { type: LOGIN_SUCCESS, payload: user };
};

export const loginFailure = (error) => {
  return { type: LOGIN_FAILURE, payload: error };
};

export const logoutSuccess = (user) => {
  return { type: LOGIN_SUCCESS };
};

export const logoutFailure = (error) => {
  return { type: LOGIN_FAILURE, payload: error };
};

export const createUserStart = () => {
  return { type: CREATE_USER_START };
};

export const createUserSuccess = (partnerUser) => {
  return { type: CREATE_USER_SUCCESS, payload: partnerUser };
};

export const createUserFailure = (error) => {
  return { type: CREATE_USER_FAILURE, payload: error };
};

// export const listRolesStart = () => {
//   return { type: LIST_ROLES_START }
// }

export const listRolesSuccess = (listRoles) => {
  return { type: LIST_ROLES_SUCCESS, payload: listRoles };
};

export const listRolesFailure = (error) => {
  return { type: LIST_ROLES_FAILURE, payload: error };
};

export const createLoanSuccess = (createLoan) => {
  return { type: CREATE_LOAN_SUCCESS, payload: createLoan };
};
export const createLoanFailure = (error) => {
  return { type: CREATE_LOAN_FAILURE, payload: error };
};

export const listLoanRequest = () => ({
  type: LIST_LOAN_REQUEST,
});
export const listLoanSuccess = (listLoan) => {
  return { type: LIST_LOAN_SUCCESS, payload: listLoan };
};
export const listLoanFailure = (error) => {
  return { type: LIST_LOAN_FAILURE, payload: error };
};
