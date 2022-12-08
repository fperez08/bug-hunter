const { Given } = require("@cucumber/cucumber");
const {
    navigateTo,
    currentPathMatchPageId,
} = require("$/src/support/browser.js");

const { expect } = require("chai");

Given(/^I am on the "([^"]*)" page$/, async function (pageId) {
    const {
        screen: { page },
        globalConfigs,
        globalVariables,
    } = this;
    globalVariables.currentScreen = pageId;
    console.log(`I am on the ${pageId} page`);
    await navigateTo(page, pageId, globalConfigs);
    expect(
        await currentPathMatchPageId(page, pageId, globalConfigs)
    ).to.be.true;
});
