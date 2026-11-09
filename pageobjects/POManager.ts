// const { DashBoardPage } = require("./DashBoardPage");
// const { LoginPage } = require("./LoginPage");
// const { CartPage } = require("./CartPage");
// const { OrdersReviewPage } = require("./OrdersReviewPage");
// const { OrdersHistoryPage } = require("./OrdersHistoryPage");

import {DashBoardPage} from "./DashBoardPage";
import {LoginPage} from "./LoginPage";
import {CartPage}   from "./CartPage";
import {OrdersReviewPage} from "./OrdersReviewPage";
import {OrdersHistoryPage} from "./OrdersHistoryPage";
import {Page} from '@playwright/test';
export class POManager {
  loginPage :LoginPage;
  dashboardPage : DashBoardPage;
  cartPage :CartPage;
  ordersReviewPage : OrdersReviewPage;
  ordersHistoryPage: OrdersHistoryPage;
  page : Page;

  constructor(page:Page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.dashboardPage = new DashBoardPage(page);
    this.cartPage = new CartPage(page);
    this.ordersReviewPage = new OrdersReviewPage(page);
    this.ordersHistoryPage = new OrdersHistoryPage(page);
  }

  getLoginPage() {
    return this.loginPage;
  }

  getDashboardPage() {
    return this.dashboardPage;
  }

  getCartPage() {
    return this.cartPage;
  }

  getOrdersReviewPage() {
    return this.ordersReviewPage;
  }

  getOrdersHistoryPage() {
    return this.ordersHistoryPage;
  }
}

// module.exports = { POManager };