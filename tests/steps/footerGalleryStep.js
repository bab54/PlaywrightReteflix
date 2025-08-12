import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';

const { Given, When, Then } = createBdd(test);

Given('i sign  into the  reteflix website {string}', async ({footerGalleryPage}, url) => {
  // Step: Given i sign  into the  reteflix website "https://reteflix.reteicons.com/"
  // From: tests\features\footerGallery.feature:8:1
 
  await footerGalleryPage.navigateToWebsite(url)
});

When('i click on gallery button on the home page', async ({footerGalleryPage}) => {
  // Step: When i click on gallery button on the home page
  // From: tests\features\footerGallery.feature:9:1
  
  await footerGalleryPage.clickGalleryButton()
});

Then('what i should observe the words - should be Eagle\'s Eye Productions - our films shape moments and inspire change', async ({footerGalleryPage}) => {     
  // Step: Then what i should observe the words - should be Eagle's Eye Productions - our films shape moments and inspire change
  // From: tests\features\footerGallery.feature:12:1
  
  await footerGalleryPage.verifyTheMessage()
});
