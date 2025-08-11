import { createBdd } from 'playwright-bdd';
import { test} from '../fixtures/fixture';
const { Given, When, Then } = createBdd(test);
