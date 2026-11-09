// const { expect } = require('@playwright/test');
import {Page,Locator,expect} from '@playwright/test'
export class LoginPage {
      page :Page;
      emailID :Locator;
      password:Locator;
       loginBtn:Locator;
  constructor(page:Page) {
    this.page = page;
    this.emailID = page.locator('#userEmail');
    this.password = page.locator('#userPassword');
    this.loginBtn = page.locator('input#login');
  }

  async goTo() {
    await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  }

  async validLogin(username:string, password:string) {
    await this.emailID.fill(username);
    await expect(this.emailID).toHaveValue(username);
    await this.password.fill(password);
    await this.loginBtn.click();
    await expect(this.page).toHaveURL(/dashboard/);
  }
}

//module.exports = { LoginPage };
