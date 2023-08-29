import { loginSuccess, loginFailure, logoutSuccess, logoutFailure, listRolesSuccess, listRolesFailure, createUserStart, createUserSuccess, createUserFailure } from "../../_actions";
import axios from 'axios';
import api from './../../axios/api';


export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await api.post('/api/partner/login', {
        email, password
      });

      const data = response.data;
      localStorage.setItem('access_token', data.access_token);
      console.log('logged in');

      dispatch(loginSuccess(data.access_token));

      console.log(response);
      console.log(data);
    } catch (error) {
      dispatch(loginFailure(error.message))
      // console.log(error)
    }
  }
};

export const logout = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Logout failed');
      }

      const data = await response.json();
      dispatch(logoutSuccess());

      console.log(response);
      console.log(data);
    } catch (error) {
      dispatch(logoutFailure(error.message))
      console.log(error)
    }
  }
};

export const createUser = (firstName, lastName, username, address, email, password, roles) => {
  return async (dispatch) => {
    try {
      const response = await api.post('/api/partner/account/create', {
        firstName, lastName, username, address, email, password, roles
      });

      const data = response.data;
      console.log(data)

      dispatch(createUserSuccess(data.partner));
    } catch (error) {
      dispatch(createUserFailure(error.message))
    }
  }
};

export const listRoles = () => {
  return async (dispatch) => {
    try {
      const response = await api.get('/api/partner/roles');

      const data = response.data;
      console.log('roles listed');

      dispatch(listRolesSuccess(data.roles));

      // console.log(response);
      // console.log(data);
    }
    catch (error) {
      dispatch(listRolesFailure(error.message))
      console.log(error)
    }
  }
};