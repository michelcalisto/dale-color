const {convertToDec} = require('./convert.js');

/* Validación de color hexadecimal */
function isHex(color) {
    var regexp = /^[0-9a-fA-F]+$/;
    if(color.length == 7){
        if(color.substring(0,1) == "#"){
            if(regexp.test(color.substring(1,6))){
                return true
            }
        }
    }
    return false
}

/* Validación de porcentaje */
function isPercentage(percentage) {
    var regexp = /^[0-9]+$/;
    if(regexp.test(percentage)){
        if(percentage >= 0 && percentage <= 100){
            return true
        }
    }
    return false
}

module.exports = {
    isHex,
    isPercentage
}