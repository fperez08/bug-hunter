import { object_has } from "@support/object_utils";
import {
    setWorldConstructor,
    World,
    setDefaultTimeout,
} from "@cucumber/cucumber";
import { GlobalConfig, Screen } from "models/global_configurations";
import { Browser, chromium, firefox, webkit } from "playwright";
import { env } from "@environment/env_parser";

const BROWSERS = Object.freeze({
    CHROMIUM: chromium,
    FIREFOX: firefox,
    WEBKIT: webkit,
});

export class ScenarioWorld extends World {
    globalConfigs: GlobalConfig;
    screen: Screen;
    constructor(options) {
        super(options);
        this.globalConfigs = options.parameters as GlobalConfig;
        this.screen = {};
    }

    async init() {
        const browserName = this.__getBrowserName();
        const browser = await this.__browserBuilder(browserName);
        const context = await browser.newContext();
        const page = await context.newPage();
        this.screen = { page, browser };
        return this.screen;
    }

    __getBrowserName(): string {
        return env("UI_AUTOMATION_BROWSER");
    }

    async __browserBuilder(browserName, options = {}): Promise<Browser> {
        object_has[browserName];
        return await BROWSERS[browserName.toUpperCase()].launch(options);
    }
}

setWorldConstructor(exports.ScenarioWorld);
setDefaultTimeout(6 * 5000);
