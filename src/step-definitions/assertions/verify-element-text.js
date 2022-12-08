const { Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { getSelector } = require("$/src/support/web_element.js");
Then(
    /^the "([^"]*)" should contain the text "(.*)"$/,
    async function (elementKey, expectedElementText) {
        const {
            screen: { page },
            globalConfigs,
        } = this;
        console.log(
            `the ${elementKey} should contain the text ${expectedElementText}`
        );

        const selector = await getSelector(page, elementKey, globalConfigs);
        await expect(page.locator(selector)).toHaveText(expectedElementText);
    }
);
