import UrlParser from '../../routers/url-parser';
import { getRestaurantDetail } from '../../data/fecth-api';
import { configData } from '../../configuration/config';
import likeInitiator from '../../utils/like-initiator';

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
          <h2 class="detail-name">${restoDetail.name}</h2>
          <div class="detail-top">
            <img class="lazyload" src="${imgBanner + restoDetail.pictureId}" alt="${restoDetail.name}"  crossorigin="anonymous">
            <div class="detail-top-text">
              <p>${restoDetail.city}</p>
              <p>${restoDetail.address}</p>
              <div id="likeButtonContainer"></div>
            </div>
          </div>
          <div class="detail-dsc">
            <h3>Deskripsi</h3>
            <p>${restoDetail.description}</p>
          </div>
          <div class="menus-resto">
            <div id="foodMenuList">
              <h3>Menu Makanan</h3>
            </div>
            <div id="drinkMenuList">
              <h3>Menu Minuman</h3>
            </div>
          </div>
          <div class="reviews">
            <h3>Review Pengunjung</h3>
            <div id="reviewList"></div>
          </div>
        </div>
      `;
      this.appendChild(detailItem);

      const foodMenuList = detailItem.querySelector('#foodMenuList');
      const drinkMenuList = detailItem.querySelector('#drinkMenuList');
      const reviewList = detailItem.querySelector('#reviewList');

      restoDetail.menus.foods.forEach((food) => {
        const foodItem = document.createElement('p');
        foodItem.textContent = food.name;
        foodMenuList.appendChild(foodItem);
      });

      restoDetail.menus.drinks.forEach((drink) => {
        const drinkItem = document.createElement('p');
        drinkItem.textContent = drink.name;
        drinkMenuList.appendChild(drinkItem);
      });

      restoDetail.customerReviews.forEach((review) => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');
        reviewItem.innerHTML = `
            <div class="profile-icon" alt="${review.name}">
              <span class="material-symbols-outlined">
              account_circle</span>
              <p><strong>${review.name}</strong></p>
            </div>
            <p class="review-txt">${review.review}</p>
            <p class="review-date">${review.date}</p>
        `;
        reviewList.appendChild(reviewItem);
      });

      const likeButtonContainer = detailItem.querySelector('#likeButtonContainer');
      likeInitiator.init({
        likeButtonContainer,
        restaurant: restoDetail,
      });
    } catch (error) {
      console.error(error);
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'Failed to load restaurant data';
      this.appendChild(errorMessage);
    }
  }
}

customElements.define('resto-detail', RestoDetail);
