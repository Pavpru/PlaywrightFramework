// const { test: base } = require('@playwright/test');

// const test = base.extend({
//   testDataOrder : {
//     username : "pavanpruthvin@gmail.com",
//     password : "Pruthvin8#n",
//     ProductName : "ZARA COAT 3"
//   }
// });

import {test as baseTest} from '@playwright/test'
interface TestDataOrder{
    username: string;
    password: string;
    ProductName: string;
}
export const test = baseTest.extend<{testDataOrder:TestDataOrder}>({
  testDataOrder : {
    username : "pavanpruthvin@gmail.com",
    password : "Pruthvin8#n",
    ProductName : "ZARA COAT 3"
  }
})