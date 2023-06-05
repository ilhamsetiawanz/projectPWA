import { getRestaurantList } from '../../data/fecth-api';
import { configData } from '../../configuration/config';

export class RestoCatalog extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    try {
      const restaurants = await getRestaurantList();
      const imgPict = configData.urlImgAPI;
      const restoItem = document.createElement('div');
      restoItem.classList.add('restoItem');

      restaurants.forEach((restaurant) => {
        const restoList = document.createElement('div');
        restoList.classList.add('resto');
        restoList.innerHTML = `
            <img class="img-resto lazyload" src="${imgPict + restaurant.pictureId}" alt="${restaurant.name}"  crossorigin="anonymous">
            <div class="resto-container">
              <h2>${restaurant.name}</h2>
              <p class="resto-info">${restaurant.rating}</p>
            </div>
            <a href="#/detail/${restaurant.id}"><button class="detail-btn">Selengkapnya</button></a>
          `;
        restoItem.appendChild(restoList);
      });

      const restoList = document.createElement('div');
      restoList.classList.add('restoList');
      restoList.appendChild(restoItem);
      this.appendChild(restoList);
    } catch (error) {
      console.error(error);
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'Failed to load restaurant data';
      this.appendChild(errorMessage);
    }
  }
}

customElements.define('resto-catalog-custom', RestoCatalog);
