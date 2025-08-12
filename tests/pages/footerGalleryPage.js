import { expect } from '@playwright/test'

class FooterGalleryPage
{
    constructor(page)
    {
        this.page = page;
        this.galleryButton = page.getByLabel('Widget menu').getByRole('link', { name: 'Gallery' });
        this.verifyMessage =page.getByText('Eagle\'s Eye Productions - our');
    }

    async navigateToWebsite(url)
    {
        await this.page.goto(url)
       


    }

    async clickGalleryButton()
    {
        await this.galleryButton.click()
         


    }

    async verifyTheMessage()
    {
        await expect(this.verifyMessage).toBeVisible();
          


    }
}

module.exports = { FooterGalleryPage };