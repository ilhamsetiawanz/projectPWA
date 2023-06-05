import 'regenerator-runtime';
import Apps from './components/views/app';
import '../style/style.css';
import swRegister from './utils/swRegister';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new Apps({
  button: document.querySelector('#nav-button'),
  navbar: document.querySelector('#navbar'),
  navDrawer: document.querySelector('.nav-items'),
  content: document.querySelector('#mainContent'),
  footer: document.querySelector('#footers'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

const skipLink = document.querySelector('.skip-link');
const mainContent = document.querySelector('#mainContent');

skipLink.addEventListener('click', (event) => {
  event.preventDefault();
  mainContent.scrollIntoView({ behavior: 'smooth' });
  skipLink.blur();
});

const START = 1;
const NUMBER_OF_IMAGES = 100;