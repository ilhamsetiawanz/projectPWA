import 'regenerator-runtime';
import Apps from './components/views/app';
import '../../style/style.css';
import swResgister from './utils/swRegister';

const app = new Apps({
  button: document.querySelector('#nav-button'),
  navbar: document.querySelector('#navbar'),
  navDrawer: document.querySelector('.nav-items'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swResgister();
});