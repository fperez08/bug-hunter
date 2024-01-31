import { ScenarioWorld } from "step-definitions/setup/world";

const { Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { getSelector } = require("$/src/support/web_element.js");
Then(
    /^the "([^"]*)" should contain the text "(.*)"$/,
    async function (
        this: ScenarioWorld,
        elementKey: string,
        expectedElementText: string
    ) {
        const {
            screen: { page },
            globalConfigs,
        } = this;

        const selector = await getSelector(page, elementKey, globalConfigs);
        await expect(page.locator(selector)).toHaveText(expectedElementText);
    }
);
