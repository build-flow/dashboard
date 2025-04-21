import axios from 'axios';

// Base URL for the Laravel backend
const API_URL = 'http://localhost:8000/api';

// Create an Axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Add a request interceptor to include the API token in headers for protected routes
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// API functions for each endpoint
export const registerUser = (userData) => api.post('/register', userData);
export const loginUser = (credentials) => api.post('/login', credentials);
export const getProjects = () => api.get('/projects');
export const addUnit = (unitData) => api.post('/units', unitData);
export const getUnits = () => api.get('/units');

export default api;