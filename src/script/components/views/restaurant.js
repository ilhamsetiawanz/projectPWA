/* eslint-disable new-cap */
import { RestoCatalog } from '../webpages/restopages';

const resto = {
  async render() {
    return `
        <section id="resto" class="restoContent">
          <h2 class="katalog-header">Our Catalog</h2>
        </section>
      `;
  },

  async afterRender() {
    const restaurantSection = document.getElementById('resto');

    const restaurantListElement = new RestoCatalog();
    restaurantSection.appendChild(restaurantListElement);
  },
};

export default resto;