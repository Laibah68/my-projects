const KEY = "sgpa_cgpa_tracker_v1";

/**
 * Load persisted data from localStorage
 */
export const loadData = () => {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

/**
 * Save state to localStorage
 */
export const saveData = (state) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // ignore quota errors
  }
};
