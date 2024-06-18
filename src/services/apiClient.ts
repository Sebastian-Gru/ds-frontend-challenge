import axios from 'axios';

const baseURL = import.meta.env.VITE_BACKEND_API_BASE_URL;

export const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
