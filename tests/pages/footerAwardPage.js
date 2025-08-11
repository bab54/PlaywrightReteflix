import { expect } from '@playwright/test';

class FooterAwardPage {
    constructor(page) {
        this.page = page;
        this.awardButton = page.getByLabel('Widget menu').getByRole('link', { name: 'Awards' });
        this.message = page.getByText('Eagle\'s Eye Productions - our')
    }
    async navigateToWebsite(url) {
        await this.page.goto(url)
    }

    async clickAwardButton()
    {
        await  this.awardButton.click();
    } 

    async VerifyMessage()
    {
        await expect(this.message ).toBeVisible()
    }
}

module.exports = { FooterAwardPage };