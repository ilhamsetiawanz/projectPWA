import { restaurantRating } from '../../data/fecth-api';

const homepage = {
  async render() {
    return `
        <div class="homepage">
        </div>
        `;
  },
  async afterRender() {
    const restaurant = await restaurantRating();
    console.log(restaurant);
  },
};

export default homepage;