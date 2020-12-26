export function convertToDec(number){
    return parseInt(number, 16)
}

export function convertToHex(number){
    var hex = number.toString(16)

    if(hex < 10){
        return '0' + hex
    }else{
        return hex
    }
}