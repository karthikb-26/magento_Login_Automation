import { expect, Page } from '@playwright/test'

class MegnatoPage {
    /**
     * 
     @param {Page} page
     */
    constructor(page) {
        this.page = page;
        this.signinBtn = page.locator('li.authorization-link a')
        this.userEmail = page.locator('#email');
        this.userPassword = page.locator("input[name='login[password]']");
        this.submitSignin = page.locator("button[type='submit'].primary span");
        this.errorMsg = page.locator("div[role='alert'].messages");
        this.LoggedTxt = page.locator('.panel.header .logged-in');
        this.LoggedLink = page.locator('button[data-action="customer-menu-toggle"]');
        this.signoutLink = page.locator(".customer-menu a[data-post*='logout']");
        this.signoutHeaderTxt = page.locator("span[data-ui-id='page-title-wrapper']");
    }
    async navigateToUrl(url) {
        await this.page.goto(url);
    }
    async clickSigninFromHome() {
        await this.signinBtn.first().click();
    }

    async signinAsUser(userEmail, userPassword) {
        await this.userEmail.fill(userEmail);
        await this.userPassword.fill(userPassword);
        await this.submitSignin.click();
    }

    async errorMsgHandle() {

        await expect(this.errorMsg.first()).toBeVisible();
    }

    async loggedHeaderTxt() {
        await expect(this.LoggedTxt).toBeVisible();
    }
    async signoutAndAssert() {
        await this.LoggedLink.first().click();
        await this.signoutLink.first().click();
        const getHeaderTxt = await this.signoutHeaderTxt.textContent();
        expect(getHeaderTxt).toContain('You are signed out');
    }
}
export default MegnatoPage;