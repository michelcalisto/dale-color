"use strict";

var _funciones = require("../general/funciones.js");

var _funciones2 = _interopRequireDefault(_funciones);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* Validación de color hexadecimal
*/
function isHex(color) {
    var regexp = /^[0-9a-fA-F]+$/;
    if (color.length == 7) {
        if (color.substring(0, 1) == "#") {
            if (regexp.test(color.substring(1, 6))) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}

/*
* Validación de porcentaje
*/
function isPorcentaje(porcentaje) {
    var regexp = /^[0-9]+$/;
    if (regexp.test(porcentaje)) {
        if (porcentaje >= 0 && porcentaje <= 100) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

/*
* Rojo = (255,0,0);
* Verde = (0,255,0);
* Azul = (0,0,255);
* 
* mientras mas cercano al 0 más oscuro será
* numero corresponde a un numero rgb (0-255)
* isOscuro(#ffffff, 180)
* es menor que 180?
*/

function isOscuro(color, numero) {
    if (isHex(color) == true) {
        var r = _funciones2.default.convertToDec(color.substring(1, 3));
        var g = _funciones2.default.convertToDec(color.substring(3, 5));
        var b = _funciones2.default.convertToDec(color.substring(5, 7));

        /* 
        * Negro o Blanco
        */
        if (r == g && g == b) {
            if (r < numero) {
                return true;
            } else {
                return false;
            }
        }
        /*
        * Primarios
        * Rojo
        */
        else if (r > b && b == g) {
                if (r < numero) {
                    return true;
                } else {
                    return false;
                }
            }
            /*
            * Verde
            */
            else if (g > r && r == b) {
                    if (g < numero) {
                        return true;
                    } else {
                        return false;
                    }
                }
                /*
                * Azul
                */
                else if (b > g && g == r) {
                        if (b < numero) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                    /*
                    * Secundarios
                    * Amarillo
                    */
                    else if (g == r && g > b) {
                            if (g < numero) {
                                return true;
                            } else {
                                return false;
                            }
                        }
                        /*
                        * Celeste
                        */
                        else if (b == g && b > r) {
                                if (b < numero) {
                                    return true;
                                } else {
                                    return false;
                                }
                            }
                            /*
                            * Rosado
                            */
                            else if (r == b && r > g) {
                                    if (r < numero) {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                }
                                /*
                                * Tersarios
                                */
                                else if (r > b && r > g) {
                                        /*
                                        * Rojo Izq
                                        */
                                        if (g > b) {
                                            if (r < numero) {
                                                return true;
                                            } else {
                                                return false;
                                            }
                                        }
                                        /*
                                        * Rojo Der
                                        */
                                        else if (g < b) {
                                                if (r < numero) {
                                                    return true;
                                                } else {
                                                    return false;
                                                }
                                            }
                                    } else if (b > g && b > r) {
                                        /*
                                        * Azul Izq
                                        */
                                        if (r > g) {
                                            if (b < numero) {
                                                return true;
                                            } else {
                                                return false;
                                            }
                                        }
                                        /*
                                        * Azul Der
                                        */
                                        else if (r < g) {
                                                if (b < numero) {
                                                    return true;
                                                } else {
                                                    return false;
                                                }
                                            }
                                    } else if (g > r && g > b) {
                                        /*
                                        * Verde Izq
                                        */
                                        if (b > r) {
                                            if (g < numero) {
                                                return true;
                                            } else {
                                                return false;
                                            }
                                        }
                                        /*
                                        * Verde Der
                                        */
                                        else if (b < r) {
                                                if (g < numero) {
                                                    return true;
                                                } else {
                                                    return false;
                                                }
                                            }
                                    }
    } else {
        return false;
    }
}

/*
* Rojo = (255,0,0);
* Verde = (0,255,0);
* Azul = (0,0,255);
* 
* mientras mas cercano al 255 más claro será
* numero corresponde a un numero rgb (0-255)
* isClaro(#ffffff, 180)
* es mayor que 180
*/

function isClaro(color, numero) {
    if (isHex(color) == true) {
        var r = _funciones2.default.convertToDec(color.substring(1, 3));
        var g = _funciones2.default.convertToDec(color.substring(3, 5));
        var b = _funciones2.default.convertToDec(color.substring(5, 7));

        /* 
        * Negro o Blanco
        */
        if (r == g && g == b) {
            if (r > numero) {
                return true;
            } else {
                return false;
            }
        }
        /*
        * Primarios
        * Rojo
        */
        else if (r > b && b == g) {
                if (b > numero) {
                    return true;
                } else {
                    return false;
                }
            }
            /*
            * Verde
            */
            else if (g > r && r == b) {
                    if (r > numero) {
                        return true;
                    } else {
                        return false;
                    }
                }
                /*
                * Azul
                */
                else if (b > g && g == r) {
                        if (g > numero) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                    /*
                    * Secundarios
                    * Amarillo
                    */
                    else if (g == r && g > b) {
                            if (b > numero) {
                                return true;
                            } else {
                                return false;
                            }
                        }
                        /*
                        * Celeste
                        */
                        else if (b == g && b > r) {
                                if (r > numero) {
                                    return true;
                                } else {
                                    return false;
                                }
                            }
                            /*
                            * Rosado
                            */
                            else if (r == b && r > g) {
                                    if (g > numero) {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                }
                                /*
                                * Tersarios
                                */
                                else if (r > b && r > g) {
                                        /*
                                        * Rojo Izq
                                        */
                                        if (g > b) {
                                            if (b > numero) {
                                                return true;
                                            } else {
                                                return false;
                                            }
                                        }
                                        /*
                                        * Rojo Der
                                        */
                                        else if (g < b) {
                                                if (g > numero) {
                                                    return true;
                                                } else {
                                                    return false;
                                                }
                                            }
                                    } else if (b > g && b > r) {
                                        /*
                                        * Azul Izq
                                        */
                                        if (r > g) {
                                            if (g > numero) {
                                                return true;
                                            } else {
                                                return false;
                                            }
                                        }
                                        /*
                                        * Azul Der
                                        */
                                        else if (r < g) {
                                                if (r > numero) {
                                                    return true;
                                                } else {
                                                    return false;
                                                }
                                            }
                                    } else if (g > r && g > b) {
                                        /*
                                        * Verde Izq
                                        */
                                        if (b > r) {
                                            if (r > numero) {
                                                return true;
                                            } else {
                                                return false;
                                            }
                                        }
                                        /*
                                        * Verde Der
                                        */
                                        else if (b < r) {
                                                if (b > numero) {
                                                    return true;
                                                } else {
                                                    return false;
                                                }
                                            }
                                    }
    } else {
        return false;
    }
}

module.exports = {
    isHex: isHex,
    isPorcentaje: isPorcentaje,
    isOscuro: isOscuro,
    isClaro: isClaro
};