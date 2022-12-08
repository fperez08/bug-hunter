const { Then } = require("@cucumber/cucumber");
const { expect } = require("$/src/support/chai_retry_assertions.js");
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

        await expect(page.locator(selector).innerText()).toContain(
            expectedElementText
        );
    }
);

Then(/the "([^"]*)" should be displayed$/, async function (elementKey) {
    const {
        screen: { page },
        globalConfigs,
        globalVariables,
    } = this;

    const selector = getLocator(elementKey, globalVariables, globalConfigs);
    await expect(page.locator(selector).isVisible()).toBeTrue();
});
