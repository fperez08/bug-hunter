import { Given } from "@cucumber/cucumber";
import { navigateTo, currentPathMatchPageId } from "@support/browser.js";

import { expect } from "@playwright/test";
import { ScenarioWorld } from "./setup/world";

Given(/^I am on the "([^"]*)" page$/, async function (pageId: string) {
    const {
        screen: { page },
        globalConfigs,
    } = this;
    await navigateTo(page, pageId, globalConfigs);
    expect(
        await currentPathMatchPageId(page, pageId, globalConfigs)
    ).toBeTruthy();
});
