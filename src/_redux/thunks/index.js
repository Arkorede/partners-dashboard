import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  listRolesSuccess,
  listRolesFailure,
  createLoanSuccess,
  createLoanFailure,
  listLoanFailure,
  listLoanSuccess,
} from "../../_actions";
import axios from "axios";
import api from "./../../axios/api";

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await api.post("/api/partner/login", {
        email,
        password,
      });

      const data = response.data;
      localStorage.setItem("access_token", data.access_token);
      console.log("logged in");

      dispatch(loginSuccess(data.access_token));

      console.log(response);
      console.log(data.partner.first_name);
    } catch (error) {
      dispatch(loginFailure(error.message));
      // console.log(error)
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      const data = await response.json();
      dispatch(logoutSuccess());

      console.log(response);
      console.log(data);
    } catch (error) {
      dispatch(logoutFailure(error.message));
      console.log(error);
    }
  };
};

export const createUser = (firstName, lastName) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "http://credbevy-env.eba-nsfp43cc.us-east-1.elasticbeanstalk.com/api/partner/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log("logged in");

      dispatch(loginSuccess(data.access_token));

      console.log(response);
      console.log(data);
    } catch (error) {
      dispatch(loginFailure(error.message));
      console.log(error);
    }
  };
};

export const listRoles = () => {
  return async (dispatch) => {
    try {
      const response = await api.get("/api/partner/roles");

      const data = response.data;
      console.log("roles listed");

      dispatch(listRolesSuccess(data.roles));

      // console.log(response);
      // console.log(data);
    } catch (error) {
      dispatch(listRolesFailure(error.message));
      console.log(error);
    }
  };
};

export const loan = (
  product_name,
  maximum_amount,
  maximum_duration,
  interest_rate,
  discount,
  discount_duration,
  loan_requirements
) => {
  return async (dispatch) => {
    try {
      const response = await api.post("/api/partner/loan-product", {
        product_name,
        maximum_amount,
        maximum_duration,
        interest_rate,
        discount,
        discount_duration,
        loan_requirements,
      });

      const data = response.data;
      localStorage.setItem("access_token", data.access_token);
      console.log("created loan product");

      dispatch(createLoanSuccess(data.access_token));

      console.log(response);
      console.log(data.data.product_name);
    } catch (error) {
      dispatch(createLoanFailure(error.message));
      // console.log(error)
    }
  };
};

// export const listLoan = () => {
//   return async (dispatch) => {
//     try {
//       const response = await api.get("/api/partner/loan-product");
//       const data = response.data;
//       dispatch(listLoanSuccess(data));
//       console.log(data)
//       console.log(response);
//       console.log(data.product_name);
//     } catch (error) {
//       dispatch(listLoanFailure(error.message));
//       // console.log(error)
//     }
//   };
// };

export const fetchLoans = () => {
  return (dispatch) => {
    dispatch(listLoanRequest());
    axios
      .get("/api/partner/loan-product")
      .then((response) => {
        const listLoan = response.data;
        console.log(listLoan);

        dispatch(listLoanSuccess(listLoan));
      })
      .catch((error) => {
        dispatch(listLoanFailure(error.message));
      });
  };
};
