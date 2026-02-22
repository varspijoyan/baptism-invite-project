import axios from "axios";

const BACKEND_URL = import.meta.env.BACKEND_URL;

if (!BACKEND_URL) {
  throw new Error("VITE_BACKEND_URL is not defined");
}

const api = axios.create({
  baseURL: `${BACKEND_URL}/api`,
});

export { api };
