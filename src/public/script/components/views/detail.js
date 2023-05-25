import { RestoDetail } from '../webpages/detail-pages';

const detail = {
  async render() {
    return `
    <div class="detailContainer">
    
    </div>    
    `;
  },
  async afterRender() {
    const detailContainer = document.querySelector('.detailContainer');
    const restoDetail = new RestoDetail();
    detailContainer.appendChild(restoDetail);
  },
};

export default detail;