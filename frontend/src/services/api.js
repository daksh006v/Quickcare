import axios from 'axios';
import store from '../store/store';
import { logout } from '../store/slices/authSlice';
import { setGlobalError } from '../store/slices/uiSlice';

// ─── Axios Instance ───────────────────────────────────────────────────────────

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api/v1',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ─── Request Interceptor ──────────────────────────────────────────────────────
// Automatically attaches the auth token to every outgoing request if present.

api.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ─── Response Interceptor ─────────────────────────────────────────────────────
// Handles global errors — 401 triggers logout, other errors set global error state.

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const message =
      error.response?.data?.message ||
      error.message ||
      'An unexpected error occurred.';

    if (status === 401) {
      // Token expired or invalid — clear auth state and redirect to login
      store.dispatch(logout());
      window.location.href = '/login';
    } else if (status >= 500) {
      // Server errors — surface to global error state
      store.dispatch(setGlobalError(message));
    }

    return Promise.reject(error);
  }
);

export default api;

// ─── Auth Endpoints ───────────────────────────────────────────────────────────

export const authService = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
};

// ─── Doctor Endpoints ─────────────────────────────────────────────────────────

export const doctorService = {
  getAll: (params) => api.get('/doctors', { params }),
  getById: (id) => api.get(`/doctors/${id}`),
  add: (doctorData) => api.post('/doctors', doctorData),
};

// ─── Booking Endpoints ────────────────────────────────────────────────────────

export const bookingService = {
  getAll: (params) => api.get('/bookings', { params }),
  getById: (id) => api.get(`/bookings/${id}`),
  create: (bookingData) => api.post('/bookings', bookingData),
  cancel: (id) => api.patch(`/bookings/${id}/cancel`),
};

// ─── Medicine Endpoints ───────────────────────────────────────────────────────

export const medicineService = {
  search: (query) => api.get('/medicines', { params: { query } }),
};
