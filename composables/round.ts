export const roundPrice = (num: string): string => {
    let numStr = Number(num).toFixed(2).toString()
    if (!numStr.includes('.')) return numStr
    if (numStr.endsWith('0')) {
        numStr = numStr.substring(0, numStr.length - 1)
    }
    if (numStr.endsWith('0')) {
        numStr = numStr.substring(0, numStr.length - 1)
    }
    if (numStr.endsWith('.')) {
        numStr = numStr.substring(0, numStr.length - 1)
    }
    return numStr
}