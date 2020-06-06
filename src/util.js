import { setTimeout } from "core-js"

/**
 * Returns a randon intenger in a limit range
 * @param { Number } limit 
 */
const getRandonInteger = (limit, lastGenerated) => {
    let generatedInt = Math.floor(Math.random() * limit) + 1

    while (generatedInt === lastGenerated) {
        generatedInt = Math.floor(Math.random() * limit) + 1
    }

    return generatedInt
}

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


const debounce = (fn, time) => {
    let timeout;

    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(
            () => fn.apply(this, arguments),
            time
        );
    }
}

export { getRandonInteger, throttle, debounce }