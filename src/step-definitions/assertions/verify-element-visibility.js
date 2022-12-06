const { Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
Then(
    /^the "([^"]*)" should contain the text "(.*)"$/,
    async function (elementKey, expectedElementText) {
        const { page } = this.screen;
        console.log(
            `the ${elementKey} should contain the text ${expectedElementText}`
        );

        const element = await page.locator("[data-id='contacts']");
        const elementText = await element.innerText();

        expect(elementText).to.contain(expectedElementText);
    }
);

Then(/the "([^"]*)" should be displayed$/, async function (elementKey) {
    const { page } = this.screen;

    const element = await page.locator("a.testing-talks-logo");
    expect(await element.isVisible()).to.be.true;
});
