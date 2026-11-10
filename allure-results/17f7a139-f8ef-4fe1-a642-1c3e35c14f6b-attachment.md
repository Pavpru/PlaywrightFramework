# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPO.spec.js >> Client App login ZARA COAT 4 
- Location: tests\ClientAppPO.spec.js:6:7

# Error details

```
TypeError: poManager.getLoginage is not a function
```

# Test source

```ts
  1  |  const {test, expect} = require('@playwright/test');
  2  |  const {POManager} = require('../pageobjects/POManager');
  3  |  const datset = JSON.parse(JSON.stringify(require('../utils/placeHolderTestData.json')))
  4  | 
  5  | for(const data of datset){
  6  |  test.only(`Client App login ${data.ProductName} `, async ({page})=>
  7  |  {
  8  |    const poManager = new POManager(page);
  9  |     //js file- Login js, DashboardPage
  10 |      const username = data.username;
  11 |      const password = data.password;
  12 |      const productName = data.ProductName;
> 13 |      const loginPage = poManager.getLoginage();
     |                                  ^ TypeError: poManager.getLoginage is not a function
  14 |      await loginPage.goTo();
  15 |      await loginPage.validLogin(username,password);
  16 |      const dashboardPage = poManager.getDashboardPage();
  17 |      await dashboardPage.searchProductAddCart(productName);
  18 |      await dashboardPage.navigateToCart();
  19 | 
  20 |     const cartPage = poManager.getCartPage();
  21 |     await cartPage.VerifyProductIsDisplayed(productName);
  22 |     await cartPage.Checkout();
  23 | 
  24 |     const ordersReviewPage = poManager.getOrdersReviewPage();
  25 |     await ordersReviewPage.searchCountryAndSelect("ind","India");
  26 |     const orderId = await ordersReviewPage.SubmitAndGetOrderId();
  27 |    console.log(orderId);
  28 |    await dashboardPage.navigateToOrders();
  29 |    const ordersHistoryPage = poManager.getOrdersHistoryPage();
  30 |    await ordersHistoryPage.searchOrderAndSelect(orderId);
  31 |   //  expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
  32 | 
  33 |   
  34 | 
  35 | 
  36 | 
  37 | 
  38 | 
  39 | 
  40 | 
  41 | 
  42 | 
  43 | 
  44 | 
  45 | 
  46 |   
  47 | 
  48 | 
  49 |     
  50 | 
  51 | 
  52 |     //Zara Coat 4
  53 | 
  54 | 
  55 | 
  56 | 
  57 | 
  58 |     
  59 | 
  60 | 
  61 | 
  62 | 
  63 | 
  64 | 
  65 | 
  66 | 
  67 | 
  68 |  });
  69 |  
  70 | 
  71 |  
  72 | }
  73 | 
  74 | 
  75 |  
  76 | 
```