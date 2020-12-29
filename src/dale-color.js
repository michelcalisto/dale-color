const {convertToDec} = require('./main/convert.js');
const {isHex, isPercentage} = require('./main/validate.js');

module.exports = class DaleColor {
  half = 128;
  isHex = isHex;
  isPercentage = isPercentage;

  constructor(half = this.half) {
    this.half = half;
  }

  /*
  * Rojo = (255,0,0);
  * Verde = (0,255,0);
  * Azul = (0,0,255);
  * 
  * mientras mas cercano al 0 más oscuro es
  * number corresponde a un número rgb (0-255)
  * isOscuro(#ffffff, 180) ¿es menor o igual que 180?
  */
  isDark(color, number = this.half) {
    if(isHex(color) == true) {
      var r = convertToDec(color.substring(1,3));
      var g = convertToDec(color.substring(3,5));
      var b = convertToDec(color.substring(5,7));

      /* Negro o Blanco */
      if((r == g && g == b) && (r <= number)) {
        return true;
      }
      /* Primarios - Rojo */
      else if((r > b && b == g) && (r <= number)) {
        return true;
      }
      /* Primarios - Verde */
      else if((g > r && r == b) && (g <= number)) {
        return true;
      }
      /* Primarios - Azul */
      else if((b > g && g == r) && (b <= number)) {
        return true;
      }
      /* Secundarios - Amarillo */
      else if((g == r && g > b) && (g <= number)) {
        return true;  
      }
      /* Secundarios - Celeste */
      else if((b == g && b > r) && (b <= number)) {
        return true;  
      }
      /* Secundarios - Rosado */
      else if((r == b && r > g) && (r <= number)) {
        return true;
      }
      /* Terciarios - Rojo Izq */
      else if((r > b && r > g) && ((g > b) && (r <= number))) {
        return true;
      }
      /* Terciarios - Rojo Der */
      else if((r > b && r > g) && ((g < b) && (r <= number))) {
        return true;
      }
      /* Terciarios - Azul Izq */
      else if((b > g && b > r) && ((r > g) && (b <= number))) {
        return true;
      }
      /* Terciarios - Azul Der */
      else if((b > g && b > r) && ((r < g) && (b <= number))) {
        return true;
      }
      /* Terciarios - Verde Izq */
      else if((g > r && g > b) && ((b > r) && (g <= number))) {
        return true;
      }
      /* Terciarios - Verde Der */
      else if((g > r && g > b) && ((b < r) && (g <= number))) {
        return true;
      }
    }
    return false;
  }

};