'use strict';

var _validaciones = require('../general/validaciones.js');

var _validaciones2 = _interopRequireDefault(_validaciones);

var _funciones = require('../general/funciones.js');

var _funciones2 = _interopRequireDefault(_funciones);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* Rojo = (255,0,0);
* Verde = (0,255,0);
* Azul = (0,0,255);
*/

function opuesto(color) {
    if (_validaciones2.default.isHex(color) == true) {
        var r = _funciones2.default.convertToDec(color.substring(1, 3));
        var g = _funciones2.default.convertToDec(color.substring(3, 5));
        var b = _funciones2.default.convertToDec(color.substring(5, 7));

        /* 
        * Negro o Blanco
        */
        if (r == g && g == b) {
            var ro = 255 - r;
            var go = 255 - g;
            var bo = 255 - b;
            return '#' + _funciones2.default.convertToHex(ro) + _funciones2.default.convertToHex(go) + _funciones2.default.convertToHex(bo);
        }
        /*
        * Primarios
        * Rojo
        */
        else if (r > b && b == g) {
                var ro = g;
                var go = r;
                var bo = r;
                return '#' + _funciones2.default.convertToHex(ro) + _funciones2.default.convertToHex(go) + _funciones2.default.convertToHex(bo);
            }
            /*
            * Verde
            */
            else if (g > r && r == b) {
                    var ro = g;
                    var go = b;
                    var bo = g;
                    return '#' + _funciones2.default.convertToHex(ro) + _funciones2.default.convertToHex(go) + _funciones2.default.convertToHex(bo);
                }
                /*
                * Azul
                */
                else if (b > g && g == r) {
                        var ro = b;
                        var go = b;
                        var bo = r;
                        return '#' + _funciones2.default.convertToHex(ro) + _funciones2.default.convertToHex(go) + _funciones2.default.convertToHex(bo);
                    }
                    /*
                    * Secundarios
                    * Amarillo
                    */
                    else if (g == r && g > b) {
                            var ro = b;
                            var go = b;
                            var bo = r;
                            return '#' + _funciones2.default.convertToHex(ro) + _funciones2.default.convertToHex(go) + _funciones2.default.convertToHex(bo);
                        }
                        /*
                        * Celeste
                        */
                        else if (b == g && b > r) {
                                var ro = g;
                                var go = r;
                                var bo = r;
                                return '#' + _funciones2.default.convertToHex(ro) + _funciones2.default.convertToHex(go) + _funciones2.default.convertToHex(bo);
                            }
                            /*
                            * Rosado
                            */
                            else if (r == b && r > g) {
                                    var ro = g;
                                    var go = r;
                                    var bo = g;
                                    return '#' + _funciones2.default.convertToHex(ro) + _funciones2.default.convertToHex(go) + _funciones2.default.convertToHex(bo);
                                }
                                /*
                                * Tersarios
                                */
                                else if (r > b && r > g) {
                                        /*
                                        * Rojo Izq
                                        */
                                        if (g > b) {
                                            var ro = b;
                                            var go = g;
                                            var bo = r;
                                            return '#' + _funciones2.default.convertToHex(ro) + _funciones2.default.convertToHex(go) + _funciones2.default.convertToHex(bo);
                                        }
                                        /*
                                        * Rojo Der
                                        */
                                        else if (g < b) {
                                                var ro = g;
                                                var go = r;
                                                var bo = b;
                                                return '#' + _funciones2.default.convertToHex(ro) + _funciones2.default.convertToHex(go) + _funciones2.default.convertToHex(bo);
                                            }
                                    } else if (b > g && b > r) {
                                        /*
                                        * Azul Izq
                                        */
                                        if (r > g) {
                                            var ro = r;
                                            var go = b;
                                            var bo = g;
                                            return '#' + _funciones2.default.convertToHex(ro) + _funciones2.default.convertToHex(go) + _funciones2.default.convertToHex(bo);
                                        }
                                        /*
                                        * Azul Der
                                        */
                                        else if (r < g) {
                                                var ro = b;
                                                var go = g;
                                                var bo = r;
                                                return '#' + _funciones2.default.convertToHex(ro) + _funciones2.default.convertToHex(go) + _funciones2.default.convertToHex(bo);
                                            }
                                    } else if (g > r && g > b) {
                                        /*
                                        * Verde Izq
                                        */
                                        if (b > r) {
                                            var ro = g;
                                            var go = r;
                                            var bo = b;
                                            return '#' + _funciones2.default.convertToHex(ro) + _funciones2.default.convertToHex(go) + _funciones2.default.convertToHex(bo);
                                        }
                                        /*
                                        * Verde Der
                                        */
                                        else if (b < r) {
                                                var ro = r;
                                                var go = b;
                                                var bo = g;
                                                return '#' + _funciones2.default.convertToHex(ro) + _funciones2.default.convertToHex(go) + _funciones2.default.convertToHex(bo);
                                            }
                                    }
    } else {
        return false;
    }
}

module.exports = {
    opuesto: opuesto
};