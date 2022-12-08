const { When } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { getSelector } = require("$/src/support/web_element.js");

When(/^I click the "([^"]*)" (?:button|link)$/, async function (elementKey) {
    const {
        screen: { page },
        globalConfigs,
    } = this;

    const selector = await getSelector(page, elementKey, globalConfigs);
    await page.locator(selector).click();
});
