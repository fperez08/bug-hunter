async function navigateTo(page, pageId, globalConfigs) {
    const hostName = process.env["UI_AUTOMATION_HOST"] || "localhost";
    const { pagesConfig, hostsConfig } = globalConfigs;

    const hostPath = hostsConfig[hostName];
    const url = new URL(hostPath);
    const pageConfigItem = pagesConfig[pageId];
    url.pathname = pageConfigItem.route;
    await page.goto(url.href);
}

async function currentPathMatchPageId(page, pageId, globalConfigs) {
    const currentUrl = await page.url();
    const { pathname } = new URL(currentUrl);
    return pathMatchesPageId(pathname, pageId, globalConfigs);
}

async function pathMatchesPageId(path, pageId, globalConfigs) {
    const { pagesConfig } = globalConfigs;
    const pageRegex = new RegExp(pagesConfig[pageId].regex);
    return pageRegex.test(path);
}

async function getCurrentPageId(page, globalConfigs) {
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
}
export { navigateTo, currentPathMatchPageId, getCurrentPageId };
