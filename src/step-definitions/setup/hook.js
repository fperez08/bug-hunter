const { Before, After } = require("@cucumber/cucumber");
const { chromium } = require("playwright");
const { env } = require("$/src/environment/env_parser.js");

Before(async function () {
    return await this.init();
});

After(async function (scenario) {
    const scenarioStatus = scenario.result?.status;
    const { page, browser } = this.screen;

    if (scenarioStatus === "FAILED") {
        const image = await page.screenshot({
            path: `${env("SCREENSHOT_PATH")}${scenario.pickle.name}.png`,
            type: "png",
        });
        this.attach(image, "image/png");
    }

    await browser.close();
});
