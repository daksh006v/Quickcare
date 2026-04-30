import { createSlice } from '@reduxjs/toolkit';
import { getItem, setItem } from '../../utils/storage';

const THEME_KEY = 'theme';

// Determine initial theme: check localStorage first, then system preference
const getInitialTheme = () => {
  const stored = getItem(THEME_KEY, 'string');
  if (stored === 'dark' || stored === 'light') return stored;
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};

const initialState = {
  theme: getInitialTheme(),
  isGlobalLoading: false,
  globalError: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      setItem(THEME_KEY, state.theme, 'string');
      // Apply to DOM
      if (typeof document !== 'undefined') {
        document.documentElement.classList.toggle('dark', state.theme === 'dark');
      }
    },
    setTheme(state, action) {
      state.theme = action.payload;
      setItem(THEME_KEY, action.payload, 'string');
      if (typeof document !== 'undefined') {
        document.documentElement.classList.toggle('dark', action.payload === 'dark');
      }
    },
    setGlobalLoading(state, action) {
      state.isGlobalLoading = action.payload;
    },
    setGlobalError(state, action) {
      state.globalError = action.payload;
    },
    clearGlobalError(state) {
      state.globalError = null;
    },
  },
});

export const { toggleTheme, setTheme, setGlobalLoading, setGlobalError, clearGlobalError } =
  uiSlice.actions;

export default uiSlice.reducer;
