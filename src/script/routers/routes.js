import resto from '../components/views/restaurant';
import favoriteWebs from '../components/views/favorite';
import detail from '../components/views/detail';
import aboutUs from '../components/views/about';

const routes = {
  '/': resto,
  '/restaurant': resto,
  '/favorite': favoriteWebs,
  '/detail/:id': detail,
  '/about': aboutUs,
};

export default routes;