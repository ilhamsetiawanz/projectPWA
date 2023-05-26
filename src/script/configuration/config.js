export const configData = {
  urlAPI: 'https://restaurant-api.dicoding.dev',
  urlImgAPI: 'https://restaurant-api.dicoding.dev/images/small/',
  urlImgBanner: 'https://restaurant-api.dicoding.dev/images/medium/',
  CACHE_NAME: new Date().toISOString(),
  CACHE_HEADERS: {
    'Cache-Control': 'public, max-age=3600',
    'Access-Control-Allow-Origin': '*',
  },
};
