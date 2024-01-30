import { getCurrentPageId } from "@support/browser";

async function getSelector(page, elementKey, globalConfigs) {
    const { pageElementsMappings } = globalConfigs;
    const pageId = await getCurrentPageId(page, globalConfigs);
    const selector =
        pageElementsMappings[pageId]?.[elementKey] ||
        pageElementsMappings.common?.[elementKey];

    if (!selector) throw Error(`Unable to find the ${elementKey} mapping`);

    return selector;
}

async function clickElement(page, selector) {
    await page.click(selector);
}

async function typeText(page, selector, text) {
    await page.fill(selector, text);
}

async function selectDropdownByValue(page, selector, value) {
    await page.selectOption(selector, value);
}
export { getSelector, clickElement, typeText, selectDropdownByValue };
