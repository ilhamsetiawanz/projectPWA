import * as TestFactories from './helper/testFactories';
import favoriteRestaurantDb from '../src/script/data/favorite-idb';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unfavoriting A Restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await favoriteRestaurantDb.putResto({ id: 1 });
  });

  afterEach(async () => {
    await favoriteRestaurantDb.deleteResto(1);
  });

  it('should display unfavorite widget when the restaurant has been favorited', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unfavorite this restaurant"]'))
      .toBeTruthy();
  });

  it('should not display favorite widget when the restaurant has been favorited', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="favorite this restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to remove favorited restaurant from the list', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    const unfavoriteButton = document.querySelector('[aria-label="unfavorite this restaurant"]');
    if (unfavoriteButton) {
      unfavoriteButton.dispatchEvent(new Event('click'));
    } else {
      throw new Error('Unfavorite button not found.');
    }

    expect(await favoriteRestaurantDb.getAllResto()).toEqual([]);
  });

  it('should not throw error if the unfavorited restaurant is not in the list', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    const unfavoriteButton = document.querySelector('[aria-label="unfavorite this restaurant"]');
    if (unfavoriteButton) {
      unfavoriteButton.dispatchEvent(new Event('click'));
    } else {
      throw new Error('Unfavorite button not found.');
    }

    expect(await favoriteRestaurantDb.getAllResto()).toEqual([]);
  });
});
