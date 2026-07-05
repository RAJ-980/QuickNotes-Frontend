import axios from "axios";

const api = axios.create({
  baseURL: "https://quicknotes-backend-xh4w.onrender.com/api"
});

export default api;
