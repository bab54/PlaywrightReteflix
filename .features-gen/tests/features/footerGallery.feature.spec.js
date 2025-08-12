// Generated from: tests\features\footerGallery.feature
import { test } from "../../../tests/fixtures/fixture.js";

test.describe('Gallery page footer', () => {

  test('Valid Gallery page Footer', async ({ Given, footerGalleryPage, When, Then }) => { 
    await Given('i sign  into the  reteflix website "https://reteflix.reteicons.com/"', null, { footerGalleryPage }); 
    await When('i click on gallery button on the home page', null, { footerGalleryPage }); 
    await Then('what i should observe the words - should be Eagle\'s Eye Productions - our films shape moments and inspire change', null, { footerGalleryPage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\footerGallery.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given i sign  into the  reteflix website \"https://reteflix.reteicons.com/\"","stepMatchArguments":[{"group":{"start":35,"value":"\"https://reteflix.reteicons.com/\"","children":[{"start":36,"value":"https://reteflix.reteicons.com/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When i click on gallery button on the home page","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then what i should observe the words - should be Eagle's Eye Productions - our films shape moments and inspire change","stepMatchArguments":[]}]},
]; // bdd-data-end