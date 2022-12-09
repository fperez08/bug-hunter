const { Given } = require("@cucumber/cucumber");
const {
    navigateTo,
    currentPathMatchPageId,
} = require("$/src/support/browser.js");

const { expect } = require("@playwright/test");

Given(/^I am on the "([^"]*)" page$/, async function (pageId) {
    const {
        screen: { page },
        globalConfigs,
    } = this;
    await navigateTo(page, pageId, globalConfigs);
    expect(
        await currentPathMatchPageId(page, pageId, globalConfigs)
    ).toBeTruthy();
});
