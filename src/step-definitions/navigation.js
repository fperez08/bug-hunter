const { Given } = require("@cucumber/cucumber");

Given(/^I am on the "([^"]*)" page$/, async function (pageId) {
    const { page } = this.screen;
    console.log(`I am on the ${pageId} page`);
    await page.goto("http://localhost:3000/");
});
