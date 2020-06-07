/**
 * Returns a randon intenger in a limit range
 * @param { Number } limit 
 */
const getRandonInteger = (limit, ...except) => {
    let generatedInt = Math.floor(Math.random() * limit) + 1

    while (except.includes(generatedInt)) {
        generatedInt = Math.floor(Math.random() * limit) + 1
    }

    return generatedInt
}

/**
 * Funnels the event call at a certain time.
 * When the timeout expires, just the last call will triger the callback.
 * This function use closure concecpt, so the canCallThrottle continue on the same scope,
 * even the function being called n times.
 * @param { Function } callback 
 * @param { Number } delay 
 * @returns { Function }
 */
function throttle(callback, delay) {
    let canCallThrottle

    return function () {
        if (!canCallThrottle) {
            callback()
            canCallThrottle = true
            canCallThrottle = setTimeout(() => {
                canCallThrottle = false
            }, delay);
        }
    }
}

/**
 * Debaunce all funtion call at a certain time, allowing the passaged just of the last one.
 * This function use closure concecpt, so the canCallThrottle continue on the same scope,
 * even the function being called n times.
 * @param { Function } callback 
 * @param { Number } delay 
 */
const debounce = (callback, delay) => {
    let timeout;

    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(
            () => callback.apply(this, arguments),
            delay
        );
    }
}

export { getRandonInteger, throttle, debounce }