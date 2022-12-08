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

const getCurrentPageId = async (page, globalConfigs) => {
    const { pagesConfig } = globalConfigs;
    const currentUrl = await page.url();
    const { pathname } = new URL(currentUrl);
    const pageIds = Object.keys(pagesConfig);
    const currentPageId = pageIds.find((pageId) =>
        pathMatchesPageId(pathname, pageId, globalConfigs)
    );

    if (!currentPageId)
        throw Error(`Failed to get page name from current route ${pathname}, \
                    possible pages: ${JSON.stringify(pagesConfig)}`);

    return currentPageId;
};

exports.navigateTo = navigateTo;
exports.currentPathMatchPageId = currentPathMatchPageId;
exports.getCurrentPageId = getCurrentPageId;
