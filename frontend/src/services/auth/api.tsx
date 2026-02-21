import axios from "axios";

const BASE_URL = "baptism-invite-project-production.up.railway.app/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export { api };
