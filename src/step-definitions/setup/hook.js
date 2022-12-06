const { Before, After } = require("@cucumber/cucumber");
const { chromium } = require("playwright");
//const fs = require("fs");

Before(async function () {
    return await this.init();
});

After(async function (scenario) {
    const scenarioStatus = scenario.result?.status;
    const { page, browser } = this.screen;

    if (scenarioStatus === "FAILED") {
        const image = await page.screenshot({
            path: `./reports/screenshots/${scenario.pickle.name}.png`,
            type: "png",
        });
    }

    await browser.close();
});
