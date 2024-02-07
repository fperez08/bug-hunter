import dotenv from "dotenv";
import { env, getJsonFromFile } from "@environment/env_parser.js";
import fs from "fs";
import { ElementMapping, Hosts, Pages } from "models/global_configurations";

dotenv.config({ path: "./env/common.env" });

const hostsConfig: Hosts = getJsonFromFile(env("HOSTS_URLS_PATHS"));
const pagesConfig: Pages = getJsonFromFile(env("PAGE_URLS_PATHS"));
const mappingFiles = fs.readdirSync(
    `${process.cwd()}${env("PAGE_ELEMENTS_PATH")}`
);

const pageElementsMappings: ElementMapping = mappingFiles.reduce(
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
    require: ["./dist/step-definitions/**/**/*.js"],
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
