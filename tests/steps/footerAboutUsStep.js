import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';
const { Given, When, Then } = createBdd(test);

Given('I navigate to reteflix website {string}', async ({footerAboutUsPage}, url) => {
  await footerAboutUsPage.navigateToWebsite(url)

});

When('i click on About Us button', async ({footerAboutUsPage}) => {
  await  footerAboutUsPage.clickAboutUsButton()
  
});

// Then('i should see the message {string} in that position', async ({footerAboutUsPage}, message) => {
//     footerAboutUsPage.VerifyMessage(message)
  
// });
Then('Eagle\'s Eye Productions - our films shape moments and inspire change shoud be visible', async ({footerAboutUsPage}) => {
await  footerAboutUsPage.VerifyMessage()
});