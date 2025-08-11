import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture'
const { Given, When, Then } = createBdd(test);


// Given('I navigate to reteflix website {string}', async ({ footerAwardPage}, url) => {
// await  footerAwardPage.navigateToWebsite(url)
// });

// When('i click on About Us button', async ({ footerAwardPage}) => {
// await  footerAwardPage.clickAwardButton()
// });

// Then('Eagle\'s Eye Productions - our films shape moments and inspire change shoud be visible', async ({ footerAwardPage}) => {
// await footerAwardPage.VerifyMessage()
// });

Given('i log unto the  reteflix website {string}', async ({footerAwardPage}, url) => {
  // Step: Given i log unto the  reteflix website "https://reteflix.reteicons.com/"
  // From: tests\features\footerAwards.feature:8:1
  await  footerAwardPage.navigateToWebsite(url)
});

When('i click on Award button on the home page', async ({footerAwardPage}) => {
  // Step: When i click on Award button on the home page
  // From: tests\features\footerAwards.feature:9:1
  await  footerAwardPage.clickAwardButton()
});
// Then('Eagle\'s Eye Productions - our films shape moments and inspire change shoud be visible', async ({ footerAwardPage}) => {
// await footerAwardPage.VerifyMessage()
// });
Then('what i should see should be Eagle\'s Eye Productions - our films shape moments and inspire change', async ({footerAwardPage}) => {
  // Step: Then what i should see should be Eagle's Eye Productions - our films shape moments and inspire change
  // From: tests\features\footerAwards.feature:12:1
  await footerAwardPage.VerifyMessage()
});
