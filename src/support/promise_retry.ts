const wait = (ms: number) =>
    new Promise<void>((resolve) => setTimeout(() => resolve(), ms));

export async function retryWithDelay(
    assertionFunc: Function,
    retry: number,
    time: number
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
}
