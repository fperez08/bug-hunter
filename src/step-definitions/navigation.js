const { Given } = require("@cucumber/cucumber");
const { navigateTo } = require("$/src/support/browser.js");

Given(/^I am on the "([^"]*)" page$/, async function (pageId) {
    const {
        screen: { page },
        globalConfigs,
    } = this;
    console.log(`I am on the ${pageId} page`);
    await navigateTo(page, pageId, globalConfigs);
});
