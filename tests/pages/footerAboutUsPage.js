import { expect } from '@playwright/test';

class FooterAboutUsPage {
    constructor(page) {
        this.page = page;
        this.aboutUsButton = page.getByLabel('Widget menu').getByRole('link', { name: 'About us' });
        this.message = page.getByText('"Eagle\'s Eye Productions -')
    }

    async navigateToWebsite(url) {
        await this.page.goto(url)
    }

    async clickAboutUsButton()
    {
        await this.aboutUsButton.click();
    } 

    async VerifyMessage()
    {
        await expect(this.message ).toBeVisible()
    }
}

module.exports = { FooterAboutUsPage };