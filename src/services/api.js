import axios from "axios";

const api = axios.create({
  baseURL: "https://quicknotes-backend-xh4w.onrender.com/"
});

export default api;
