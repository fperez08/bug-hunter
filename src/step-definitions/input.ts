import { Given } from "@cucumber/cucumber";
import { getSelector, clickElement, typeText } from "@support/web_element";
import { ScenarioWorld } from "./setup/world";

Given(
    /^I type "([^"]*)" in "([^"]*)"$/,
    async function (text: string, elementKey: string) {
        const {
            screen: { page },
            globalConfigs,
        } = this;

        const selector = await getSelector(page, elementKey, globalConfigs);
        await typeText(page, selector, text);
    }
);
