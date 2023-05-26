import { AboutPage } from '../webpages/about-pages';

const aboutUs = {
  async render() {
    return `
        <section id="about" class="about-section">
            <section class="about-content">
                <p class="about-tag">Website for Restaurant and Cafe</p>
                <h2 class="about-header">Our Story</h2>
                <p class="about-desc">Platform katalog restoran terbaik untuk menemukan kuliner favoritmu.</p>
            </section>
        </section>
        <section id="about-more">
            <section class="about-content">
                <p class="about-tag">Come & Experience Our Best of World Class Cousine</p>
                <h2 class="about-header">Our Partner</h2>
                <p class="about-desc">Website restoran kami berpartner dengan mitra terbaik untuk pengalaman terbaik.</p>
            </section>
            <section class="img-partner">
                <img src="/src/public/asset/img/card/card  1.jpeg" alt="patnership">
                <img src="/src/public/asset/img/card/card  2.jpeg" alt="patnership">
                <img src="/src/public/asset/img/card/card 3.jpeg" alt="patnership">
                <img src="/src/public/asset/img/card/card 4.jpeg" alt="patnership">
                <img src="/src/public/asset/img/card/card 5.jpeg" alt="patnership">
            </section
        </section>
        `;
  },

  async afterRender() {
    const aboutSection = document.getElementById('about');

    const aboutListElement = new AboutPage();
    aboutSection.appendChild(aboutListElement);
  },
};

export default aboutUs;