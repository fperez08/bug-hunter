const { When } = require("@cucumber/cucumber");
const { getSelector, clickElement } = require("$/src/support/web_element.js");

When(/^I click the "([^"]*)" (?:button|link)$/, async function (elementKey) {
    const {
        screen: { page },
        globalConfigs,
    } = this;

    const selector = await getSelector(page, elementKey, globalConfigs);
    await clickElement(page, selector);
});
