exports.getJsonFromFile = function (path) {
    return require(`${process.cwd()}${path}`);
};

exports.env = function (key) {
    const value = process.env[key];
    if (!value) throw Error(`${key} value not found in the environment`);
    return value;
};
