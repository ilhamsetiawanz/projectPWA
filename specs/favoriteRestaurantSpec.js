import * as TestFactories from './helper/testFactories';
import favoriteRestaurantDb from '../src/script/data/favorite-idb';

describe('Favoriting A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should  show the favorite Button when the  restaurant has not been favorited before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this Restaurant"]'))
      .toBeTruthy();
  });

  it('should not show the unfavorite button when the restaurant has not been favorited before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this Restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to favorite the restaurant', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await favoriteRestaurantDb.getResto(1);

    expect(restaurant).toEqual({ id: 1 });

    favoriteRestaurantDb.deleteResto(1);
  });

  it('should not add restaurant again when its already favorited', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    await favoriteRestaurantDb.putResto({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await favoriteRestaurantDb.getAllResto()).toEqual([{ id: 1 }]);

    favoriteRestaurantDb.deleteResto(1);
  });

  it('should not add a restaurant when has no id', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await favoriteRestaurantDb.getAllResto()).toEqual([]);
  });
});