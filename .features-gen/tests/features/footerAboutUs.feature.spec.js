// Generated from: tests\features\footerAboutUs.feature
import { test } from "../../../tests/fixtures/fixture.js";

test.describe('About Us footer', () => {

  test('Valid About Us Footer', async ({ Given, footerAboutUsPage, When, Then }) => { 
    await Given('I navigate to reteflix website "https://reteflix.reteicons.com/"', null, { footerAboutUsPage }); 
    await When('i click on About Us button', null, { footerAboutUsPage }); 
    await Then('Eagle\'s Eye Productions - our films shape moments and inspire change shoud be visible', null, { footerAboutUsPage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\footerAboutUs.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I navigate to reteflix website \"https://reteflix.reteicons.com/\"","stepMatchArguments":[{"group":{"start":31,"value":"\"https://reteflix.reteicons.com/\"","children":[{"start":32,"value":"https://reteflix.reteicons.com/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When i click on About Us button","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then Eagle's Eye Productions - our films shape moments and inspire change shoud be visible","stepMatchArguments":[]}]},
]; // bdd-data-end