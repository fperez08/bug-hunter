import { expect } from "chai";
import { retryWithDelay } from "@support/promise_retry";

exports.expectAsync = function (actual) {
    const defaultOptions = { retry: 50, waitTime: 100 };
    this.toContain = async function (expected, options = defaultOptions) {
        const { retry, waitTime } = options;
        await retryWithDelay(
            async () => {
                expect(await actual).to.contain(expected);
            },
            retry,
            waitTime
        );
    };
    this.toBeTrue = async function (options = defaultOptions) {
        const { retry, waitTime } = options;
        await retryWithDelay(
            async () => {
                expect(await actual).to.be.true;
            },
            retry,
            waitTime
        );
    };
    return this;
};
