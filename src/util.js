/**
 * Returns a randon intenger in a limit range
 * @param { Number } limit 
 */
const getRandonInteger = (limit) => {
    return Math.floor(Math.random() * limit) + 1
}

let canCallThrottle = false

function throttle(callback, delay) {
    if (!canCallThrottle) {
        callback()
        canCallThrottle = true
        canCallThrottle = setTimeout(() => {
            canCallThrottle = false
        }, delay);
    }
}

export { getRandonInteger, throttle }