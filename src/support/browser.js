exports.navigateTo = async (page, pageId, globalConfigs) => {
    const hostName = process.env["UI_AUTOMATION_HOST"] || "localhost";
    const { pagesConfig, hostsConfig } = globalConfigs;
    console.log(
        "🚀 ~ file: browser.js:4 ~ exports.navigateTo= ~ globalConfigs",
        globalConfigs
    );

    const hostPath = hostsConfig[hostName];
    const url = new URL(hostPath);
    const pageConfigItem = pagesConfig[pageId];
    url.pathname = pageConfigItem.route;
    await page.goto(url.href);
};
