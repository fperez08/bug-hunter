const common = {
    paths: ["./src/features/**/*.feature"],
    require: ["./src/step-definitions/**/**/*.js"],
    format: ["progress-bar", "json:./reports/report.json"],
};

module.exports = {
    default: { ...common },
    dev: { ...common, tags: "@dev" },
    smoke: { ...common, tags: "@smoke" },
    regression: { ...common, tags: "@regression" },
};
