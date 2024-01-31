import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { getSelector } from "@support/web_element.js";
import { ScenarioWorld } from "step-definitions/setup/world";

Then(
    /the "([^"]*)" should be displayed$/,
    async function (this: ScenarioWorld, elementKey: string) {
        const {
            screen: { page },
            globalConfigs,
        } = this;

        const selector = await getSelector(page, elementKey, globalConfigs);
        await expect(page.locator(selector)).toBeVisible();
    }
);

Then(
    /the element with text "(.*)" should be displayed$/,
    async function (this: ScenarioWorld, text: string) {
        const {
            screen: { page },
        } = this;

        await expect(page.getByText(text)).toBeVisible();
    }
);
