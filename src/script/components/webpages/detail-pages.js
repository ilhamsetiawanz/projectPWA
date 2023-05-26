import UrlParser from '../../routers/url-parser';
import { getRestaurantDetail, getRestaurantList } from '../../data/fecth-api';
import { configData } from '../../configuration/config';

export class RestoDetail extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    try {
      const imgBanner = configData.urlImgBanner;
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restoDetail = await getRestaurantDetail(url.id);
      const detailItem = document.createElement('div');
      detailItem.classList.add('detail-item');

      detailItem.innerHTML = `
        <div class="resto-detail">
          <h2>${restoDetail.name}</h2>
          <img src="${imgBanner + restoDetail.pictureId}" alt="${restoDetail.name}">
          <p>${restoDetail.description}</p>
        </div>
      `;
      this.appendChild(detailItem);
    } catch (error) {
      console.error(error);
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'Failed to load restaurant data';
      this.appendChild(errorMessage);
    }
  }
}

customElements.define('resto-detail', RestoDetail);
