const { object_has } = require("$/src/support/object_utils.js");
const {
    setWorldConstructor,
    World,
    setDefaultTimeout,
} = require("@cucumber/cucumber");
const { chromium, firefox, webkit } = require("playwright");
const { env } = require("$/src/environment/env_parser.js");

const BROWSERS = Object.freeze({
    CHROMIUM: chromium,
    FIREFOX: firefox,
    WEBKIT: webkit,
});

exports.ScenarioWorld = class ScenarioWorld extends World {
    constructor(options) {
        super(options);
        screen: {
        }
        this.globalConfigs = options.parameters;
    }

    async init() {
        const browserName = this.__getBrowserName();
        const browser = await this.__browserBuilder(browserName);
        const context = await browser.newContext();
        const page = await context.newPage();
        this.screen = { page, browser };
        return this.screen;
    }

    __getBrowserName() {
        return env("UI_AUTOMATION_BROWSER");
    }

    async __browserBuilder(browserName, options = {}) {
        object_has[browserName];
        return await BROWSERS[browserName.toUpperCase()].launch(options);
    }
};

setWorldConstructor(exports.ScenarioWorld);
setDefaultTimeout(6 * 5000);
