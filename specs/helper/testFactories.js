import likeInitiator from '../../src/script/utils/like-initiator';
import favoriteRestaurantDb from '../../src/script/data/favorite-idb';

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await likeInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: favoriteRestaurantDb,
    restaurant,
  });
};

export { createFavoriteButtonPresenterWithRestaurant };
