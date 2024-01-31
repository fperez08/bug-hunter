import { Page } from "playwright";
import { GlobalConfig } from "models/global_configurations";
async function navigateTo(
    page: Page,
    pageId: string,
    globalConfigs: GlobalConfig
) {
    const hostName = process.env["UI_AUTOMATION_HOST"] || "localhost";
    const { pagesConfig, hostsConfig } = globalConfigs;

    const hostPath = hostsConfig[hostName];
    const url = new URL(hostPath);
    const pageConfigItem = pagesConfig[pageId];
    url.pathname = pageConfigItem.route;
    await page.goto(url.href);
}

async function currentPathMatchPageId(
    page: Page,
    pageId: string,
    globalConfigs: GlobalConfig
): Promise<boolean> {
    const currentUrl = await page.url();
    const { pathname } = new URL(currentUrl);
    return pathMatchesPageId(pathname, pageId, globalConfigs);
}

async function pathMatchesPageId(
    path: string,
    pageId: string,
    globalConfigs: GlobalConfig
): Promise<boolean> {
    const { pagesConfig } = globalConfigs;
    const pageRegex = new RegExp(pagesConfig[pageId].regex);
    return pageRegex.test(path);
}

async function getCurrentPageId(
    page: Page,
    globalConfigs: GlobalConfig
): Promise<string> {
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
