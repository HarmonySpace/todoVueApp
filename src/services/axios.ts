import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  //baseurl not found
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

//FORMA 1
// import axios from "axios";
// const axiosInstance = axios.create({
//   baseURL: "http://localhost:3000/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

export default axiosInstance;
