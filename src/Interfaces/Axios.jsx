import axios from "axios";

const apiEndpoint = axios.create({
  // baseURL: 'http://127.0.0.1:5000/',
  baseURL: "https://game-buddy-api.herokuapp.com/",
  // baseURL: "http://www.localhost:5000/",
  header: {
    Accept: "application/json",
  },
});

apiEndpoint.interceptors.request.use((config) => {
  const Token = sessionStorage.getItem("gameBuddyToken");
  config.headers.Authorization = Token ? `Bearer ${Token}` : "";
  // config.headers = ["Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"]
  return config;
});

export default apiEndpoint;
