// const { expect } = require("@playwright/test");
import {Page , Locator , expect } from '@playwright/test'
export class OrdersReviewPage
{
    readonly page: Page;
  readonly country: Locator;
  readonly dropdown: Locator;
  readonly emailId: Locator;
  readonly submit: Locator;
  readonly orderConfirmationText: Locator;
  readonly orderId: Locator;
constructor(page:Page)
{
    this.page = page;
this.country = page.locator("[placeholder*='Country']");
this.dropdown = page.locator(".ta-results");
this.emailId = page.locator(".user__name [type='text']").first();
this.submit =  page.locator(".action__submit");
this.orderConfirmationText = page.locator(".hero-primary");
this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");

}
async searchCountryAndSelect(countryCode:any,countryName:any)
{

    await this.country.type(countryCode,{delay:100});
    await this.dropdown.waitFor();
    const optionsCount = await this.dropdown.locator("button").count();
    for (let i = 0; i < optionsCount; i++) {
      const option = this.dropdown.locator("button").nth(i);
      const text = (await option.textContent())?.trim();
      if (text === countryName) {
        await option.click();
        return;
      }
    }

    throw new Error(`Country "${countryName}" was not found in the suggestions`);
}

async VerifyEmailId(username:string)
{
    await expect(this.emailId).toHaveText(username);
}

async SubmitAndGetOrderId()
{
 await this.submit.click();
 await expect(this.orderConfirmationText).toHaveText(" Thankyou for the order. ");
 return await this.orderId.textContent();
}
}
// module.exports = {OrdersReviewPage};
   