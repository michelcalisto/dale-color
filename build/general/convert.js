'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.convertToDec = convertToDec;
exports.convertToHex = convertToHex;
function convertToDec(number) {
    return parseInt(number, 16);
}

function convertToHex(number) {
    var hex = number.toString(16);

    if (hex < 10) {
        return '0' + hex;
    } else {
        return hex;
    }
}