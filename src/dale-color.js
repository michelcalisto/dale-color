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
  * R = (255,0,0);
  * G = (0,255,0);
  * B = (0,0,255);
  * 
  * mientras mas cercano al 0 más oscuro es
  * number corresponde a un número rgb (0-255)
  * isDark(#ffffff, 128) ¿es menor o igual a 128?
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

  /*
  * R = (255,0,0);
  * G = (0,255,0);
  * B = (0,0,255);
  * 
  * mientras mas cercano al 255 más claro es
  * number corresponde a un número rgb (0-255)
  * isLight(#ffffff, 128) ¿es mayor a 128?
  */
  isLight(color, number = this.half) {
    if(isHex(color) == true){
      var r = convertToDec(color.substring(1,3))
      var g = convertToDec(color.substring(3,5))
      var b = convertToDec(color.substring(5,7))

      /* Negro o Blanco */
      if((r == g && g == b) && (r > number)) {
        return true;
      }
      /* Primarios - Rojo */
      else if((r > b && b == g) && (b > number)) {
        return true;
      }
      /* Primarios - Verde */
      else if((g > r && r == b) && (r > number)) {
        return true;    
      }
      /* Primarios - Azul */
      else if((b > g && g == r) && (g > number)) {
        return true;         
      }
      /* Secundarios - Amarillo */
      else if((g == r && g > b) && (b > number)) {
        return true; 
      }
      /* Secundarios - Celeste */
      else if((b == g && b > r) && (r > number)) {
        return true; 
      }
      /* Secundarios - Rosado */
      else if((r == b && r > g) && (g > number)) {
        return true; 
      }
      /* Terciarios - Rojo Izq */
      else if((r > b && r > g) && ((g > b) && (b > number))) {
        return true;
      }
      /* Terciarios - Rojo Der */
      else if((r > b && r > g) && ((g < b) && (g > number))) {
        return true;
      }
      /* Terciarios - Azul Izq */
      else if((b > g && b > r) && ((r > g) && (g > number))) {
        return true;
      }
      /* Terciarios - Azul Der */
      else if((b > g && b > r) && ((r < g) && (r > number))) {
        return true;
      }
      /* Terciarios - Verde Izq */
      else if((g > r && g > b) && ((b > r) && (r > number))) {
        return true;
      }
      /* Terciarios - Verde Der */
      else if((g > r && g > b) && ((b < r) && (b > number))) {
        return true;
      }
    }
    return false;
  }

};