/**
 * Save data to localStorage.
 * @param {string} key - The key to save the data under.
 * @param {any} data - The data to be saved.
 */
export const saveToLocalStorage = (key: string, data: any): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving data to localStorage:", error);
  }
};

/**
 * Delete data from localStorage for a specific key.
 * @param {string} key - The key to delete data for.
 */
export const deleteFromLocalStorage = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error deleting data from localStorage:", error);
  }
};

/**
 * Get data from localStorage for a specific key.
 * @param {string} key - The key to get data for.
 * @returns {any} - The data retrieved from localStorage, or null if not found.
 */
export const getFromLocalStorage = (key: string): any | null => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error getting data from localStorage:", error);
    return null;
  }
};
