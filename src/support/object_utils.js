const _ = require("lodash");

const object_has = function (obj, path) {
    if (!_.has(obj, path))
        throw Error(
            `${path} is not a key or a valid path of the object: ${JSON.stringify(
                obj
            )}`
        );
    return true;
};

exports.object_has = object_has;
