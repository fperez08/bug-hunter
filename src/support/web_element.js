exports.getLocator = (elementKey, globalVariables, globalConfigs) => {
    const { pageElementsMappings } = globalConfigs;
    const currentPage = globalVariables.currentScreen;
    const selector =
        pageElementsMappings[currentPage]?.[elementKey] ||
        pageElementsMappings.common?.[elementKey];

    if (!selector) throw Error(`Unable to find the ${elementKey} mapping`);

    return selector;
};
