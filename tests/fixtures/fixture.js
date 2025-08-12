import { test as base } from 'playwright-bdd';
//import {test1 as base} from '@playwright/test';
import {FooterAboutUsPage} from '../pages/footerAboutUsPage'
import {FooterAwardPage} from '../pages/footerAwardPage'
import{FooterGalleryPage} from '../pages/footerGalleryPage'

export const test = base.extend({



  footerAboutUsPage: async ({ page }, use) => {
    await use(new FooterAboutUsPage(page));
  },
  
  footerAwardPage: async ({ page }, use) => {
    await use(new FooterAwardPage(page));
  },

  footerGalleryPage: async ({ page }, use) => {
    await use(new FooterGalleryPage(page));

  }


});


  