import axios from "axios";
import React from "react";

// const token = localStorage.getItem('access_token');

const instance = axios.create({
<<<<<<< HEAD
  baseURL: 'https://api.credbevy.com',
=======
  baseURL: "https://api.credbevy.com",
>>>>>>> 2602306abbd0313ccf744347696f3e174ca5bd26
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});

const handleErrors = (error) => {
  console.log(error.response.data);
};

instance.interceptors.response.use(
  (response) => response,
  (error) => handleErrors(error)
);

export default instance;
