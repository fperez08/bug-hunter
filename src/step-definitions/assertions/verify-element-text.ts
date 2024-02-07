import { ScenarioWorld } from "step-definitions/setup/world";

const { Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { getSelector } = require("@support/web_element");
Then(
    /^the "([^"]*)" should contain the text "(.*)"$/,
    async function (elementKey: string, expectedElementText: string) {
        const {
            screen: { page },
            globalConfigs,
        }: ScenarioWorld = this;

        const selector = await getSelector(page, elementKey, globalConfigs);
        await expect(page.locator(selector)).toHaveText(expectedElementText);
    }
);
