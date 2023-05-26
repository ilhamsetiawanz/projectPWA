import { configData } from './config';

export const API_GATE = {
  restaurantList: `${configData.urlAPI}/list`,
  restaurantDetail: (id) => `${configData.urlAPI}/detail/${id}`,
  restaurantReview: (id) => `${configData.urlAPI}/review/${id}`,
};