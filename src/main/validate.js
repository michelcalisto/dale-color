/* Validación de color hexadecimal */
function isHex(color) {
    var regexp = /^#[0-9a-fA-F]{6}$/;
    if(regexp.test(color)){
        return true;
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