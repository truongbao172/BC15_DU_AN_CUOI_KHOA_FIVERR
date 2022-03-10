import axios from "axios";
import React from "react";
export const DOMAIN = "https://fiverr.cybersoft.edu.vn";
export const TOKEN = "tokenByClass"; // này là của lớp
export const tokenByClass =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNSIsIkhldEhhblN0cmluZyI6IjIwLzA2LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1NTY4MzIwMDAwMCIsIm5iZiI6MTYyNjI4MjAwMCwiZXhwIjoxNjU1ODMwODAwfQ.p47FFJpArherjwlM71xTzdulAQIW37pR6fRGD3t3Ji0";

export const USER_LOGIN = "USER_LOGIN";
export const ACCESS_TOKEN = "ACCESS_TOKEN"; // này để lưu token của người dùng lúc đăng nhập xong
export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 5000,
});

// http.interceptors.request.use(
//   // mà cái config http này dùng ở đâu vậy ?
//   (config) => {
//     config.headers = {
//       ...config.headers,
//       [TOKEN]: tokenByClass,
//       Authorization: "Bearer " + localStorage.getItem("tokenByClass"), //token mà người dùng đăng nhập(401 token khong hop le, 403 khong du   quyen truy cap)
//     };
//     return config;
//   },
//   (errors) => {
//     return Promise.reject(errors);
//   }
// );
