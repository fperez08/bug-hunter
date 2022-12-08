const { Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { getSelector } = require("$/src/support/web_element.js");

Then(/the "([^"]*)" should be displayed$/, async function (elementKey) {
    const {
        screen: { page },
        globalConfigs,
    } = this;

    const selector = await getSelector(page, elementKey, globalConfigs);
    await expect(page.locator(selector)).toBeVisible();
});
