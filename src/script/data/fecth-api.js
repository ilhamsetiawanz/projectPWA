import { API_GATE } from '../configuration/endpoint';

// Mengambil List restaurant dari API
export const getRestaurantList = async () => {
  try {
    const url = `${API_GATE.restaurantList}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.restaurants;
  } catch (error) {
    console.error('Error fetching restaurant list:', error);
    return [];
  }
};

// menampilkan resto dengan rating 4.5
export const restaurantRating = async () => {
  try {
    const url = `${API_GATE.restaurantList}`;
    const response = await fetch(url);
    const data = await response.json();
    const resto = data.restaurants;
    const filterResto = resto.filter((restaurants) => restaurants.rating >= 4.5);
    return filterResto;
  } catch (error) {
    console.error('Error fetching restaurant list:', error);
    return [];
  }
};

// Mengambil Detail restaurant dari API
export const getRestaurantDetail = async (id) => {
  const url = `${API_GATE.restaurantDetail(id)}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.restaurant;
};
