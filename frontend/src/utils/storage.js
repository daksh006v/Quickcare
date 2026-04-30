/**
 * Safe localStorage and sessionStorage utility helpers.
 * Handles JSON serialization, deserialization, and storage unavailability gracefully.
 */

const isStorageAvailable = (type) => {
  try {
    const storage = window[type];
    const testKey = '__storage_test__';
    storage.setItem(testKey, 'test');
    storage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
};

// ─── localStorage ────────────────────────────────────────────────────────────

/**
 * Get an item from localStorage.
 * @param {string} key
 * @param {'json'|'string'} [format='json'] - How to parse the value.
 * @returns {any} Parsed value or null.
 */
export const getItem = (key, format = 'json') => {
  if (!isStorageAvailable('localStorage')) return null;
  try {
    const raw = localStorage.getItem(key);
    if (raw === null) return null;
    return format === 'string' ? raw : JSON.parse(raw);
  } catch {
    return null;
  }
};

/**
 * Set an item in localStorage.
 * @param {string} key
 * @param {any} value
 * @param {'json'|'string'} [format='json']
 */
export const setItem = (key, value, format = 'json') => {
  if (!isStorageAvailable('localStorage')) return;
  try {
    localStorage.setItem(key, format === 'string' ? value : JSON.stringify(value));
  } catch {
    // Storage full or unavailable - fail silently
  }
};

/**
 * Remove an item from localStorage.
 * @param {string} key
 */
export const removeItem = (key) => {
  if (!isStorageAvailable('localStorage')) return;
  try {
    localStorage.removeItem(key);
  } catch {
    // Fail silently
  }
};

/**
 * Clear all QuickCare-related keys from localStorage on logout.
 */
export const clearAuthStorage = () => {
  removeItem('qc_auth');
  removeItem('theme');
};

// ─── sessionStorage ──────────────────────────────────────────────────────────

/**
 * Get an item from sessionStorage.
 * @param {string} key
 * @param {'json'|'string'} [format='json']
 * @returns {any}
 */
export const getSessionItem = (key, format = 'json') => {
  if (!isStorageAvailable('sessionStorage')) return null;
  try {
    const raw = sessionStorage.getItem(key);
    if (raw === null) return null;
    return format === 'string' ? raw : JSON.parse(raw);
  } catch {
    return null;
  }
};

/**
 * Set an item in sessionStorage.
 * @param {string} key
 * @param {any} value
 * @param {'json'|'string'} [format='json']
 */
export const setSessionItem = (key, value, format = 'json') => {
  if (!isStorageAvailable('sessionStorage')) return;
  try {
    sessionStorage.setItem(key, format === 'string' ? value : JSON.stringify(value));
  } catch {
    // Fail silently
  }
};

/**
 * Remove an item from sessionStorage.
 * @param {string} key
 */
export const removeSessionItem = (key) => {
  if (!isStorageAvailable('sessionStorage')) return;
  try {
    sessionStorage.removeItem(key);
  } catch {
    // Fail silently
  }
};
