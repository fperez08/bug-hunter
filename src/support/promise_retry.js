// @ts-nocheck
const wait = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));

exports.retryWithDelay = async function retryWithDelay(
    assertionFunc,
    retry,
    time
) {
    try {
        await assertionFunc();
    } catch (err) {
        if (retry <= 0) {
            throw err;
        }

        await wait(time);

        return retryWithDelay(assertionFunc, retry - 1, time);
    }
};
