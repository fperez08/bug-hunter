function getJsonFromFile(path: string) {
    return require(`${process.cwd()}${path}`);
}

function env(key: string) {
    const value = process.env[key];
    if (!value) throw Error(`${key} value not found in the environment`);
    return value;
}

export { env, getJsonFromFile };
