const navigateTo = async (page, pageId, globalConfigs) => {
    const hostName = process.env["UI_AUTOMATION_HOST"] || "localhost";
    const { pagesConfig, hostsConfig } = globalConfigs;

    const hostPath = hostsConfig[hostName];
    const url = new URL(hostPath);
    const pageConfigItem = pagesConfig[pageId];
    url.pathname = pageConfigItem.route;
    await page.goto(url.href);
};

const currentPathMatchPageId = async (page, pageId, globalConfigs) => {
    const currentUrl = await page.url();
    const { pathname } = new URL(currentUrl);
    return pathMatchesPageId(pathname, pageId, globalConfigs);
};

const pathMatchesPageId = (path, pageId, globalConfigs) => {
    const { pagesConfig } = globalConfigs;
    const pageRegex = new RegExp(pagesConfig[pageId].regex);
    return pageRegex.test(path);
};

exports.navigateTo = navigateTo;
exports.currentPathMatchPageId = currentPathMatchPageId;
