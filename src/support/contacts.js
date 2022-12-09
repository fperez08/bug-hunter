const {
    getSelector,
    typeText,
    selectDropdownByValue,
    clickElement,
} = require("$/src/support/web_element.js");
const { expect } = require("@playwright/test");

const fillContactForm = async (data, page, globalConfigs) => {
    const keys = Object.keys(data);
    const mapResult = keys.map(async (key) => {
        const selector = await getSelector(page, key, globalConfigs);
        return { [key]: selector };
    });
    const formSelectors = await Promise.all(mapResult);
    const elementMappings = formSelectors.reduce(splitElementsByTag, {
        inputs: [],
        selects: [],
    });
    await fillInputs(page, elementMappings.inputs, data);
    await selectDropdowns(page, elementMappings.selects, data);
};

const splitElementsByTag = (result, elementMapping) => {
    const key = Object.keys(elementMapping)[0];
    if (elementMapping[key].includes("input")) {
        result.inputs.push(elementMapping);
    } else {
        result.selects.push(elementMapping);
    }
    return { ...result };
};

const fillInputs = async (page, elementMappings, data) => {
    for (const elementMapping of elementMappings) {
        const key = Object.keys(elementMapping)[0];
        await typeText(page, elementMapping[key], data[key]);
    }
};

const selectDropdowns = async (page, elementMappings, data) => {
    for (const elementMapping of elementMappings) {
        const key = Object.keys(elementMapping)[0];
        await selectDropdownByValue(page, elementMapping[key], data[key]);
    }
};

exports.fillContactForm = fillContactForm;
