import { openDB } from 'idb';
import { configData } from '../configuration/config';

const { DATABASE_NAME, DATABASE_VERSION, DATABASE_OBJECT_STORE } = configData;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(DATABASE_OBJECT_STORE, { keyPath: 'id' });
  },
});

const favoriteRestaurantDb = {
  async getResto(id) {
    return (await dbPromise).get(DATABASE_OBJECT_STORE, id);
  },
  async getAllResto() {
    return (await dbPromise).getAll(DATABASE_OBJECT_STORE);
  },
  async putResto(resto) {
    return (await dbPromise).put(DATABASE_OBJECT_STORE, resto);
  },
  async deleteResto(id) {
    return (await dbPromise).delete(DATABASE_OBJECT_STORE, id);
  },
};

export default favoriteRestaurantDb;