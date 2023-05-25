import resto from '../components/views/restaurant';
import homepage from '../components/views/home';
import trypage from '../components/views/try';
import detail from '../components/views/detail';
import aboutUs from '../components/views/about';

const routes = {
  '/': homepage,
  '/restaurant': resto,
  '/try': trypage,
  '/detail/:id': detail,
  '/about': aboutUs,
};

export default routes;