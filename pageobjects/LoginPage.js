const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailID = page.locator('#userEmail');
    this.password = page.locator('#userPassword');
    this.loginBtn = page.locator('input#login');
  }

  async goTo() {
    await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  }

  async validLogin(username, password) {
    await this.emailID.fill(username);
    await expect(this.emailID).toHaveValue(username);
    await this.password.fill(password);
    await this.loginBtn.click();
  }
}

module.exports = { LoginPage };
