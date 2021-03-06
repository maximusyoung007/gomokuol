import axios from "axios";

axios.interceptors.request.use(function(config) {
  let token = localStorage.getItem("token");
  if(token) {
    config.headers.token = token;
  }
  return config;
},function(error) {

})

axios.interceptors.response.use(function (response) {
  return response.data;
},function (error) {

})

export default axios;
