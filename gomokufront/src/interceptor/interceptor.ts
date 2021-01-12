import axios from "axios";

axios.interceptors.response.use(
  response => {
    return Promise.resolve(response.data);
  },
  error => {
    return Promise.reject(error.data);
  }
)

export default axios
