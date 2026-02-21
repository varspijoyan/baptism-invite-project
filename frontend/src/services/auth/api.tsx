import axios from "axios";

const BASE_URL = `${import.meta.env.BACKEND_URL}/api`;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export { api };
