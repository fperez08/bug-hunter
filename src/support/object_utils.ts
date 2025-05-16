import _ from "lodash";

export function object_has(obj: object, path: Array<string> | string) {
    if (!_.has(obj, path))
        throw Error(
            `${path} is not a key or a valid path of the object: ${JSON.stringify(
                obj
            )}`
        );
    return true;
}
