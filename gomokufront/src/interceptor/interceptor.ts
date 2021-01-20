import axios from "axios";

axios.interceptors.request.use(function(config: any) {
  let token = localStorage.getItem("token");
  if(token) {
    config.headers.Authorization = token;
  }
  return config;
},function(error) {

})

axios.interceptors.response.use(function (response) {
  return response.data;
},function (error) {

})

export default axios;
