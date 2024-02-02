import { getCurrentPageId } from "@support/browser";
import { GlobalConfig } from "models/global_configurations";
import { Page } from "playwright";

async function getSelector(
    page: Page,
    elementKey: string,
    globalConfigs: GlobalConfig
) {
    const { pagesElementsMapping } = globalConfigs;
    const pageId = await getCurrentPageId(page, globalConfigs);
    const selector =
        pagesElementsMapping[pageId]?.[elementKey] ||
        pagesElementsMapping.common?.[elementKey];

    if (!selector) throw Error(`Unable to find the ${elementKey} mapping`);

    return selector;
}

async function clickElement(page: Page, selector: string) {
    await page.click(selector);
}

async function typeText(page: Page, selector: string, text: string) {
    await page.fill(selector, text);
}

async function selectDropdownByValue(
    page: Page,
    selector: string,
    value: string
) {
    await page.selectOption(selector, value);
}
export { getSelector, clickElement, typeText, selectDropdownByValue };
