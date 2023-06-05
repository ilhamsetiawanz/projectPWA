import likeInitiator from '../../src/script/utils/like-initiator';
import favoriteRestaurantDb from '../../src/script/data/favorite-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await likeInitiator.init({
    likeButtonContainer: document.querySelector('.like'),
    favoriteRestaurants: favoriteRestaurantDb,
    restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithRestaurant };