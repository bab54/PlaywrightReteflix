// Generated from: tests\features\footerAwards.feature
import { test } from "../../../tests/fixtures/fixture.js";

test.describe('Award page footer', () => {

  test('Valid Award page Footer', async ({ Given, footerAwardPage, When, Then }) => { 
    await Given('i log unto the  reteflix website "https://reteflix.reteicons.com/"', null, { footerAwardPage }); 
    await When('i click on Award button on the home page', null, { footerAwardPage }); 
    await Then('what i should see should be Eagle\'s Eye Productions - our films shape moments and inspire change', null, { footerAwardPage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\footerAwards.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given i log unto the  reteflix website \"https://reteflix.reteicons.com/\"","stepMatchArguments":[{"group":{"start":33,"value":"\"https://reteflix.reteicons.com/\"","children":[{"start":34,"value":"https://reteflix.reteicons.com/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When i click on Award button on the home page","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then what i should see should be Eagle's Eye Productions - our films shape moments and inspire change","stepMatchArguments":[]}]},
]; // bdd-data-end