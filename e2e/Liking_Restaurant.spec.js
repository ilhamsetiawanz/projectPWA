/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
/* eslint-disable comma-dangle */

const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Restaurant tidak ditemukan!', '.restaurantIsEmpty p');

  I.amOnPage('/');

  I.seeElement('.detail-name a');

  const firstRestaurant = locate('.detail-name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-detail');

  const likedRestaurantName = await I.grabTextFrom('.detail-name');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', async ({ I }) => {
//   I.see('Restaurant tidak ditemukan!', '.restaurantIsEmpty p');

  I.amOnPage('/');

  I.seeElement('.detail-name a');

  const firstRestaurant = locate('.detail-name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.resto-detail');

  const likedRestaurantName = await I.grabTextFrom('.detail-name');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click(likedRestaurantName);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  const FavoriteRestaurantIsEmpty = await I.grabTextFrom(
    '.restaurantIsEmpty p',
  );
  assert.strictEqual('Restaurant tidak ditemukan!', FavoriteRestaurantIsEmpty);
});