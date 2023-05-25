import axios from 'axios';
import { API_GATE } from '../configuration/endpoint';

// Mengambil List restaurant dari API
export const getRestaurantList = async () => {
  try {
    const url = `${API_GATE.restaurantList}`;
    const response = await axios.get(url);
    return response.data.restaurants;
  } catch (error) {
    console.error('Error fetching restaurant list:', error);
    return [];
  }
};

// menampilkan resto dengan rating 4.5
export const restaurantRating = async () => {
  try {
    const url = `${API_GATE.restaurantList}`;
    const response = await axios.get(url);
    const resto = response.data.restaurants;
    const filterResto = resto.filter((restaurants) => restaurants.rating >= 4.5);
    return filterResto;
  } catch (error) {
    console.error('Error fetching restaurant list:', error);
    return [];
  }
};

// Mengambil Detail restaurant dari API
export const getRestauranDetail = async (id) => {
  const url = `${API_GATE.restaurantDetail(id)}`;
  const response = await axios.get(url);
  return response.data.restaurant;
};

// Mengambil Menambahkan Review restaurant dari API
export const addReview = async () => {
  const url = `${API_GATE.restaurantReview}`;
  const response = await axios.post(url);
  return response.data.customerReviews;
};