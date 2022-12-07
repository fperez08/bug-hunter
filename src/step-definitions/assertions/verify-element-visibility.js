const { Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const { getLocator } = require("$/src/support/web_element.js");
Then(
    /^the "([^"]*)" should contain the text "(.*)"$/,
    async function (elementKey, expectedElementText) {
        const {
            screen: { page },
            globalConfigs,
            globalVariables,
        } = this;
        console.log(
            `the ${elementKey} should contain the text ${expectedElementText}`
        );

        const selector = getLocator(elementKey, globalVariables, globalConfigs);
        const elementText = await page.locator(selector).innerText();

        expect(elementText).to.contain(expectedElementText);
    }
);

Then(/the "([^"]*)" should be displayed$/, async function (elementKey) {
    const {
        screen: { page },
        globalConfigs,
        globalVariables,
    } = this;

    const selector = getLocator(elementKey, globalVariables, globalConfigs);
    const locator = await page.locator(selector);
    expect(await locator.isVisible()).to.be.true;
});
