const { test: base } = require('@playwright/test');

const test = base.extend({
  testDataOrder : {
    username : "pavanpruthvin@gmail.com",
    password : "Pruthvin8#n",
    ProductName : "ZARA COAT 3"
  }
});