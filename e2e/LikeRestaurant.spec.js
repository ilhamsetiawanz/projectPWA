const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#resto');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.seeElement('#resto');

  I.amOnPage('/');
  I.seeElement('.detail-btn');
  const firstRestaurant = locate('.detail-btn').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(2); // Tambahkan penundaan sebelum melanjutkan langkah berikutnya

  I.amOnPage('/#/favorite');
  I.seeElement('.resto');
  I.seeElement('.detail-btn');
  const firstLikedRestaurant = locate('.detail-btn').first();
  const likedRestaurantTitle = await I.grabTextFrom(firstLikedRestaurant);
  I.click(firstLikedRestaurant);

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unfavoriting a Restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('#resto-btn');

  const firstRestaurant = locate('#resto-btn').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForClickable('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restoItem');
  const likedRestaurantTitle = await I.grabTextFrom('#resto-btn');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
});
