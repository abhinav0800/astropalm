import { get, set, del, keys, clear } from 'idb-keyval';

/**
 * storageService - Uses IndexedDB (via idb-keyval) for large data (images/readings)
 * and LocalStorage for simple app states.
 */
export const storageService = {
  // Persist large objects (Reading history, base64 images)
  async saveReading(id, data) {
    try {
      const readings = (await get('user_readings')) || [];
      const updatedReadings = [{ id, timestamp: Date.now(), ...data }, ...readings];
      await set('user_readings', updatedReadings.slice(0, 50)); // Keep last 50
      return true;
    } catch (e) {
      console.error("Storage Error:", e);
      return false;
    }
  },

  async getReadings() {
    return (await get('user_readings')) || [];
  },

  // Generic Key-Value helpers
  async setItem(key, value) {
    return await set(key, value);
  },

  async getItem(key) {
    return await get(key);
  },

  async removeItem(key) {
    return await del(key);
  },

  async clearAll() {
    localStorage.clear();
    return await clear();
  }
};
