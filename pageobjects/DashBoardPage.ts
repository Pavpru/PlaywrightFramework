//const { expect } = require('@playwright/test');
import {expect,Page,Locator} from '@playwright/test'

export class DashBoardPage{

    page :Page;
    products :Locator;
    productstext:Locator;
    cart:Locator;
    orders:Locator;
    constructor(page:Page){
        this.page = page;
        this.products= page.locator('.card-body');
        this.productstext= page.locator('.card-body b');
        this.cart= page.locator("[routerlink*='cart']");
        this.orders = page.locator("button[routerlink*='myorders']");
    }

    async searchProductAddCart(productName:string){
        await expect(this.products.first()).toBeVisible();
        const productNames = await this.productstext.allTextContents();
        const productIndex = productNames.findIndex(name => name.trim() === productName);

        if (productIndex === -1) {
            throw new Error(`Product "${productName}" was not found on the dashboard`);
        }

        await this.products.nth(productIndex)
            .getByRole('button', { name: 'Add To Cart' })
            .click();
    }

    async navigateToCart(){
        await this.cart.click();
    }

    async navigateToOrders(){
        await this.orders.click();
    }
}

//module.exports = {DashBoardPage};