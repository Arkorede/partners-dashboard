import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  LIST_ROLES_START,
  LIST_ROLES_SUCCESS,
  LIST_ROLES_FAILURE,
  CREATE_LOAN_SUCCESS,
  CREATE_LOAN_FAILURE,
  LIST_LOAN_REQUEST,
  LIST_LOAN_SUCCESS,
  LIST_LOAN_FAILURE,
} from "../../_actions";

const initialState = {
  partnerUser: null,
  currentUser: null,
  currentLoan: null,
  listLoan: [],
  error: null,
  roles: [],
  loading: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, currentUser: action.payload, error: null };
    case LOGIN_FAILURE:
      return { ...state, currentUser: null, error: action.payload };
    case LOGOUT_SUCCESS:
      return { ...state, currentUser: null, error: null };
    case LOGOUT_FAILURE:
      return { ...state, error: action.payload };
    case CREATE_USER_START:
      return { ...state };
    case CREATE_USER_SUCCESS:
      return { ...state, partnerUser: action.payload, error: null };
    case CREATE_USER_FAILURE:
      return { ...state, partnerUser: null, error: action.payload };
    default:
      return state;
  }
};

// export const roleReducer = (state = [], action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case LIST_ROLES_START:
//       return { ...state }
//     case LIST_ROLES_SUCCESS: {
//       const { roles } = payload;
//       return { ...state, roles };
//     }
//   }
// }

export const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_ROLES_START:
      return { ...state };
    case LIST_ROLES_SUCCESS:
      return { ...state, roles: action.payload, error: null };
    case LIST_ROLES_FAILURE:
      return { ...state, roles: null, error: action.payload };
    default:
      return state;
  }
};

export const loanReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_LOAN_SUCCESS:
      return { ...state, currentLoan: action.payload, error: null };
    case CREATE_LOAN_FAILURE:
      return { ...state, currentLoan: null, error: action.payload };
    default:
      return state;
  }
};

export const listLoanReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_LOAN_REQUEST:
      return { ...state, loading:true, error: null };
    case LIST_LOAN_SUCCESS:
      return { ...state, listLoan: action.payload, error: null };
    case LIST_LOAN_FAILURE:
      return { ...state, listLoan: null, error: action.payload };
    default:
      return state;
  }
};
