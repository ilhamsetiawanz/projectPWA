const assert = require('assert');

Feature('LikeRestaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty Favorited Restaurant', ({ I }) => {
  I.seeElement('#resto');
});

Scenario('favoriting one restaurant', async ({ I }) => {
  I.seeElement('#resto');

  I.amOnPage('/');
  I.wait(3);

  I.seeElement('#resto-btn');

  const firstResto = locate('#resto-btn').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  I.wait(10);

  I.seeElement('#likeButton button');
  I.click('#likeButton button');
  I.wait(3);

  I.amOnPage('/#/favorite');
  I.seeElement('#resto');
  const favoritedRestoTitle = await I.grabTextFrom('#resto-title');

  assert.strictEqual(firstRestoTitle, favoritedRestoTitle);
});

// Scenario('unfavoriting one restaurant', async ({ I }) => {
//   I.wait(5);
//   I.see('Tidak ada restaurant untuk ditampilkan', '#resto-item__not__found');
//   I.amOnPage('/');
//   I.wait(3);
//   I.waitForElement('#resto-item');
//   I.seeElement('#resto-title a');
//   const firstResto = locate('#resto-title a').first();
//   const firstRestoTitle = await I.grabTextFrom(firstResto);
//   I.click(firstResto);
//   I.wait(10);
//   I.seeElement('#favoriteButton');
//   I.click('#favoriteButton');
//   I.wait(3);
//   I.amOnPage('/#/favorite');
//   I.wait(3);
//   I.seeElement('#resto-item a');
//   const firstRestolike = locate('#resto-title a').first();
//   const favoritedRestoTitle = await I.grabTextFrom(firstRestolike);
//   assert.strictEqual(firstRestoTitle, favoritedRestoTitle);
//   I.click(firstRestolike);
//   I.wait(10);
//   I.seeElement('#favoriteButton');
//   I.click('#favoriteButton');
//   I.wait(3);
//   I.amOnPage('/#/favorite');
//   I.wait(3);
//   I.seeElement('#resto-item__not__found');
//   const onFav = await I.grabTextFrom('#resto-item__not__found');
//   assert.strictEqual(onFav, 'Tidak ada restaurant untuk ditampilkan');
// });
