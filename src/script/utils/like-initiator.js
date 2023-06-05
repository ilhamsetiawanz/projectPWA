import favoriteRestaurantDb from '../data/favorite-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../components/item/like-button';

const likeInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurants = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurants;

    if (await this._isRestaurantLikes(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantLikes(id) {
    const restaurant = await favoriteRestaurantDb.getResto(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await favoriteRestaurantDb.putResto(this._restaurants);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await favoriteRestaurantDb.deleteResto(this._restaurants.id);
      this._renderButton();
    });
  },
};

export default likeInitiator;