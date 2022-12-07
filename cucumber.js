const dotenv = require("dotenv");
const { env, getJsonFromFile } = require("$/src/environment/env_parser.js");

dotenv.config({ path: env("COMMON_CONFIG_FILE") });

const hostsConfig = getJsonFromFile(env("HOSTS_URLS_PATHS"));
const pagesConfig = getJsonFromFile(env("PAGE_URLS_PATHS"));

const common = {
    paths: ["./src/features/**/*.feature"],
    require: ["./src/step-definitions/**/**/*.js"],
    format: ["progress-bar", "json:./reports/report.json"],
    worldParameters: {
        hostsConfig: { ...hostsConfig },
        pagesConfig: { ...pagesConfig },
    },
};

module.exports = {
    default: { ...common },
    dev: { ...common, tags: "@dev" },
    smoke: { ...common, tags: "@smoke" },
    regression: { ...common, tags: "@regression" },
};
