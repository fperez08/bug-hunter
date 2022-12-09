const { getCurrentPageId } = require("$/src/support/browser.js");

const getSelector = async (page, elementKey, globalConfigs) => {
    const { pageElementsMappings } = globalConfigs;
    const pageId = await getCurrentPageId(page, globalConfigs);
    const selector =
        pageElementsMappings[pageId]?.[elementKey] ||
        pageElementsMappings.common?.[elementKey];

    if (!selector) throw Error(`Unable to find the ${elementKey} mapping`);

    return selector;
};

const clickElement = async (page, selector) => {
    await page.click(selector);
};

const typeText = async (page, selector, text) => {
    await page.fill(selector, text);
};

const selectDropdownByValue = async (page, selector, value) => {
    await page.selectOption(selector, value);
};

exports.getSelector = getSelector;
exports.clickElement = clickElement;
exports.typeText = typeText;
exports.selectDropdownByValue = selectDropdownByValue;
