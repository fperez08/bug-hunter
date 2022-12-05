const { Given } = require("@cucumber/cucumber");

Given(/^I am on the "([^"]*)" page$/, async function (pageId) {
    console.log(`I am on the ${pageId} page`);
    await global.page.goto("http://localhost:3000/");
});
