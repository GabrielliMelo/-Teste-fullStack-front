import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_URL_API_LOCAL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});
