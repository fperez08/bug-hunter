import { getCurrentPageId } from "@support/browser";
import { GlobalConfig } from "models/global_configurations";
import { Page } from "playwright";
import { checkElementIsVisible } from "@support/web_elements_checker";

async function getSelector(
    page: Page,
    elementKey: string,
    globalConfigs: GlobalConfig
) {
    const { pageElementsMappings } = globalConfigs;
    const pageId = await getCurrentPageId(page, globalConfigs);
    const selector =
        pageElementsMappings[pageId]?.[elementKey] ||
        pageElementsMappings.common?.[elementKey];

    if (!selector) throw Error(`Unable to find the ${elementKey} mapping`);

    return selector;
}

async function clickElement(page: Page, selector: string) {
    const locator = page.locator(selector);
    await checkElementIsVisible(locator);
    await locator.click();
}

async function typeText(page: Page, selector: string, text: string) {
    const locator = page.locator(selector);
    await checkElementIsVisible(locator);
    await locator.fill(text);
}

async function selectDropdownByValue(
    page: Page,
    selector: string,
    value: string
) {
    const locator = page.locator(selector);
    await checkElementIsVisible(locator);
    await locator.selectOption(value);
}
export { getSelector, clickElement, typeText, selectDropdownByValue };
