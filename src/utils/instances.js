import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.osmaniahospital.com/api/",
  // baseURL: "http://26.119.120.48:3000/api/",
})
