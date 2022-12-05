const { Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
Then(
    /^the "([^"]*)" should contain the text "(.*)"$/,
    async function (elementKey, expectedElementText) {
        console.log(
            `the ${elementKey} should contain the text ${expectedElementText}`
        );

        const element = await global.page.locator("[data-id='contacts']");
        const elementText = await element.innerText();

        expect(elementText).to.contain(expectedElementText);
    }
);

Then(/the "([^"]*)" should be displayed$/, async function (elementKey) {
    const element = await global.page.locator("a.testing-talks-logo");

    expect(await element.isVisible()).to.be.true;
});
