const { Before, After } = require("@cucumber/cucumber");
const { chromium } = require("playwright");
//const fs = require("fs");

Before(async function () {
    const browser = await chromium.launch(); // Or 'firefox' or 'webkit'.
    const page = await browser.newPage();

    global.browser = browser;
    global.page = page;
});

After(async function (scenario) {
    const scenarioStatus = scenario.result?.status;

    if (scenarioStatus === "FAILED") {
        const image = await global.page.screenshot({
            path: `./reports/screenshots/${scenario.pickle.name}.png`,
            type: "png",
        });
    }

    await global.browser.close();
});
