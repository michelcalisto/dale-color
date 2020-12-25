'use strict';

var _validaciones = require('../general/validaciones.js');

var _validaciones2 = _interopRequireDefault(_validaciones);

var _funciones = require('../general/funciones.js');

var _funciones2 = _interopRequireDefault(_funciones);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function aclarar(color, porcentaje) {
    if (_validaciones2.default.isHex(color) == true && _validaciones2.default.isPorcentaje(porcentaje) == true) {
        var r = _funciones2.default.convertToDec(color.substring(1, 3));
        var g = _funciones2.default.convertToDec(color.substring(3, 5));
        var b = _funciones2.default.convertToDec(color.substring(5, 7));

        var valor_porcentaje = Math.round(porcentaje * 255 / 100);

        return '#' + _funciones2.default.convertToHex(agregarClaridad(r, valor_porcentaje)) + _funciones2.default.convertToHex(agregarClaridad(g, valor_porcentaje)) + _funciones2.default.convertToHex(agregarClaridad(b, valor_porcentaje));
    } else {
        return false;
    }
}

function agregarClaridad(numero_color, valor_porcentaje) {
    if (numero_color + valor_porcentaje > 255) {
        return 255;
    } else {
        return numero_color + valor_porcentaje;
    }
}

function oscurecer(color, porcentaje) {
    if (_validaciones2.default.isHex(color) == true && _validaciones2.default.isPorcentaje(porcentaje) == true) {
        var r = _funciones2.default.convertToDec(color.substring(1, 3));
        var g = _funciones2.default.convertToDec(color.substring(3, 5));
        var b = _funciones2.default.convertToDec(color.substring(5, 7));

        var valor_porcentaje = Math.round(porcentaje * 255 / 100);

        return '#' + _funciones2.default.convertToHex(agregarOscuridad(r, valor_porcentaje)) + _funciones2.default.convertToHex(agregarOscuridad(g, valor_porcentaje)) + _funciones2.default.convertToHex(agregarOscuridad(b, valor_porcentaje));
    } else {
        return false;
    }
}

function agregarOscuridad(numero_color, valor_porcentaje) {
    if (numero_color - valor_porcentaje < 0) {
        return 0;
    } else {
        return numero_color - valor_porcentaje;
    }
}

module.exports = {
    aclarar: aclarar,
    oscurecer: oscurecer
};