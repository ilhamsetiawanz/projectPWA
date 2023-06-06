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

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(3);

  I.amOnPage('/#/favorite');
  I.seeElement('#resto');
  const favoritedRestoTitle = await I.grabTextFrom('#resto-title h2');

  assert.strictEqual(firstRestoTitle, favoritedRestoTitle);
});

Scenario('unfavoriting one restaurant', async ({ I }) => {
  I.wait(5);
  I.amOnPage('/');
  I.wait(3);
  I.waitForElement('.restoItem');
  I.seeElement('#resto-btn');
  const firstResto = locate('#resto-btn').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  I.wait(10);
  I.amOnPage('/#/detail/');
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(3);
  I.amOnPage('/#/favorite');
  I.wait(3);
  I.seeElement('#resto-btn');
  const firstRestolike = locate('#resto-btn').first();
  const favoritedRestoTitle = await I.grabTextFrom(firstRestolike);
  assert.strictEqual(firstRestoTitle, favoritedRestoTitle);
  I.click(firstRestolike);
  I.wait(10);
  I.amOnPage('/#/detail/');

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(3);
  I.amOnPage('/#/favorite');
  I.wait(3);
  I.seeElement('#resto-item__not__found');
  const onFav = await I.grabTextFrom('#resto-item__not__found');
  assert.strictEqual(onFav, 'Tidak ada restaurant untuk ditampilkan');
});
