import reporter from "cucumber-html-reporter";
import { env } from "@environment/env_parser";
import dotenv from "dotenv";

dotenv.config({ path: env("COMMON_CONFIG_FILE") });

const options = {
    theme: "bootstrap",
    jsonFile: env("JSON_REPORT_FILE"),
    output: env("HTML_REPORT_FILE"),
    screenshotsDirectory: env("SCREENSHOT_PATH"),
    storeScreenshots: true,
    reportSuiteAsScenarios: true,
    launchReport: false,
};

// @ts-ignore
reporter.generate(options);
