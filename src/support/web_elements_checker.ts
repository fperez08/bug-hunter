import { Locator, expect } from "@playwright/test";
export async function checkElementIsVisible(locator: Locator) {
    await expect(locator).toBeVisible();
}
