const navigationBar = {
  init({ button, navDrawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleRespon(event, navDrawer);
    });
    content.addEventListener('click', (event) => {
      this._closeDrawer(event, navDrawer);
    });
  },
  _toggleRespon(event, navDrawer) {
    event.stopPropagation();
    navDrawer.classList.toggle('active');
  },
  _closeDrawer(event, navDrawer) {
    event.stopPropagation();
    navDrawer.classList.remove('active');
  },
};

export default navigationBar;