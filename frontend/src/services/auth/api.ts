import axios from "axios";

const BACKEND_URL = 'https://baptism-invite-project-3luw.vercel.app';

if (!BACKEND_URL) {
  throw new Error("VITE_BACKEND_URL is not defined");
}

export const api = axios.create({
  baseURL: `${BACKEND_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});