import { restaurantRating } from '../../data/fecth-api';
import { configData } from '../../configuration/config';

export class AboutPage extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    try {
      const about = await restaurantRating();
      const imgPict = configData.urlImgAPI;

      const aboutList = document.createElement('div');
      aboutList.classList.add('about-list');

      about.slice(0, 3).forEach((restaurant) => {
        const aboutContainer = document.createElement('div');
        aboutContainer.classList.add('about-container');
        aboutContainer.innerHTML = `
                <img class="about-img lazyload" src="${imgPict + restaurant.pictureId}" alt="${restaurant.name}  crossorigin="anonymous">
                <div class="about-detail>
                    <h2 class="about-head">${restaurant.name}</div>
                    <p class="about-item">${restaurant.description}
                </div>
                `;
        aboutList.appendChild(aboutContainer);
      });
      this.appendChild(aboutList);
    } catch (error) {
      console.error(error);
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'Failed to load restaurant data';
      this.appendChild(errorMessage);
    }
  }
}
customElements.define('about-page', AboutPage);