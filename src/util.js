/**
 * Returns a randon intenger in a limit range
 * @param { Number } limit 
 */
const getRandonInteger = (limit) => {
    return Math.floor(Math.random() * limit) + 1
}

export { getRandonInteger }