import RestaurantSource from '../../data/fecth-api';

const trypage = {
  async render() {
    return `
      <h2>Restaurant</h2>
      <section class="restoContent">
        <div id="resto" class="resto-card">
          
        </div>
      </section>
    `;
  },
  async afterRender() {
    //
  },
};

export default trypage;
