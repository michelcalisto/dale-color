function convertToDec(numero){
    return parseInt(numero, 16)
}

function convertToHex(numero){
    var hex = numero.toString(16)

    if(hex < 10){
        return '0' + hex
    }else{
        return hex
    }
}

module.exports = {
    convertToDec,
    convertToHex
}