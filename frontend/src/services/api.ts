import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:3337/",
});

export default Api;
