const { Then: When } = require("@cucumber/cucumber");
const { fillContactForm } = require("$/src/support/contacts.js");

When(/^I fill the form with "([^"]*)"$/, async function (dataId) {
    const {
        screen: { page },
        globalConfigs,
    } = this;
    const { testData } = globalConfigs;
    const data = testData[dataId];
    await fillContactForm(data, page, globalConfigs);
});
