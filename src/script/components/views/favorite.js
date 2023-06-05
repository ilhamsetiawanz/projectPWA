import { RestoFavorite } from '../webpages/favorite-page';

const favoriteWebs = {
  async render() {
    return `
      <section id="resto" class="restoContent">
        <h2 class="katalog-header">Your Favorite</h2>
      </section>
    `;
  },
  async afterRender() {
    const restaurantSection = document.getElementById('resto');

    const restaurantListElement = new RestoFavorite();
    restaurantSection.appendChild(restaurantListElement);
  },
};

export default favoriteWebs;
