import { When } from "@cucumber/cucumber";
import { getSelector, clickElement } from "@support/web_element";

When(
    /^I click the "([^"]*)" (?:button|link)$/,
    async function (elementKey: string) {
        const {
            screen: { page },
            globalConfigs,
        } = this;

        const selector = await getSelector(page, elementKey, globalConfigs);
        await clickElement(page, selector);
    }
);
