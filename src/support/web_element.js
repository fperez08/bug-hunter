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

exports.getSelector = getSelector;
