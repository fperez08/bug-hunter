const dotenv = require("dotenv");
const { env, getJsonFromFile } = require("$/src/environment/env_parser.js");
const fs = require("fs");

dotenv.config({ path: env("COMMON_CONFIG_FILE") });

const hostsConfig = getJsonFromFile(env("HOSTS_URLS_PATHS"));
const pagesConfig = getJsonFromFile(env("PAGE_URLS_PATHS"));
const mappingFiles = fs.readdirSync(
    `${process.cwd()}${env("PAGE_ELEMENTS_PATH")}`
);

const pageElementsMappings = mappingFiles.reduce(
    (pageElementConfigAcc, file) => {
        const key = file.replace(".json", "");
        const elementMappings = getJsonFromFile(
            `${env("PAGE_ELEMENTS_PATH")}${file}`
        );
        return { ...pageElementConfigAcc, [key]: elementMappings };
    },
    {}
);

const common = {
    paths: ["./src/features/**/*.feature"],
    require: ["./src/step-definitions/**/**/*.js"],
    format: ["progress-bar", "json:./reports/report.json"],
    worldParameters: {
        hostsConfig: { ...hostsConfig },
        pagesConfig: { ...pagesConfig },
        pageElementsMappings: { ...pageElementsMappings },
    },
};

module.exports = {
    default: { ...common },
    dev: { ...common, tags: "@dev" },
    smoke: { ...common, tags: "@smoke" },
    regression: { ...common, tags: "@regression" },
};
