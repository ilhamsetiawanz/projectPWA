import { itActsAsFavoriteRestaurantModel } from './contract/FavoriteRestaurantContract';
import favoriteRestaurantDb from '../src/script/data/favorite-idb';

describe('Favorite Restaurant IDB contract Test', () => {
  afterEach(async () => {
    (await favoriteRestaurantDb.getAllResto()).forEach(async (Restaurant) => {
      await favoriteRestaurantDb.deleteResto(Restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(favoriteRestaurantDb);
});