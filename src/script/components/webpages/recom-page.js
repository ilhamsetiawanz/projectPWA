import { restaurantRating } from '../../data/fecth-api';
import { configData } from '../../configuration/config';

export class RecomPage extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    try {
      const recomendation = await restaurantRating();
      const imgPict = configData.urlImgAPI;

      const recomList = document.createElement('div');
      recomList.classList.add('recom-list');

      recomendation.slice(0, 4).forEach((restaurant) => {
        const recomContainer = document.createElement('div');
        recomContainer.classList.add('recom-container');
        recomContainer.innerHTML = `
          <img class="recom-img lazyload" src="${imgPict + restaurant.pictureId}" alt="${restaurant.name}" >
          <div class="recom-detail">
            <a href="#/detail/${restaurant.id}">${restaurant.name}</a>
            <p>${restaurant.rating}</p>
          </div>
        `;
        recomList.appendChild(recomContainer);
      });

      this.appendChild(recomList);
    } catch (error) {
      console.error(error);
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'Failed to load restaurant data';
      this.appendChild(errorMessage);
    }
  }
}

customElements.define('recom-page', RecomPage);
