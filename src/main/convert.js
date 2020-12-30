function toDec(number){
    return parseInt(number, 16)
}

function toHex(number){
    var hex = number.toString(16)
    if(hex < 10){
        return '0' + hex
    }
    return hex
}

module.exports = {
    toDec,
    toHex
}