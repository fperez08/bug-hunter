const wait = (ms) =>
    // @ts-ignore
    new Promise((resolve) => setTimeout(() => resolve(), ms));

exports.retryWithDelay = async function retryWithDelay(
    predicate,
    retries = 10,
    interval = 100,
    finalErr = "Retry failed"
) {
    try {
        // try
        await predicate();
    } catch (err) {
        // if no retries left
        // throw error
        if (retries <= 0) {
            return Promise.reject(finalErr);
        }

        //delay the next call
        await wait(interval);

        //recursively call the same func
        return retryWithDelay(predicate, retries - 1, interval, finalErr);
    }
};
