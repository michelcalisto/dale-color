const {convertToDec, convertToHex} = require('./main/convert.js');
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
  isDark(color) {
    if(isHex(color) == true) {
      var r = convertToDec(color.substring(1,3));
      var g = convertToDec(color.substring(3,5));
      var b = convertToDec(color.substring(5,7));

      /* Negro o Blanco */
      if((r == g && g == b) && (r <= this.half)) {
        return true;
      }
      /* Primarios - Rojo */
      else if((r > b && b == g) && (r <= this.half)) {
        return true;
      }
      /* Primarios - Verde */
      else if((g > r && r == b) && (g <= this.half)) {
        return true;
      }
      /* Primarios - Azul */
      else if((b > g && g == r) && (b <= this.half)) {
        return true;
      }
      /* Secundarios - Amarillo */
      else if((g == r && g > b) && (g <= this.half)) {
        return true;  
      }
      /* Secundarios - Celeste */
      else if((b == g && b > r) && (b <= this.half)) {
        return true;  
      }
      /* Secundarios - Rosado */
      else if((r == b && r > g) && (r <= this.half)) {
        return true;
      }
      /* Terciarios - Rojo Izq */
      else if((r > b && r > g) && ((g > b) && (r <= this.half))) {
        return true;
      }
      /* Terciarios - Rojo Der */
      else if((r > b && r > g) && ((g < b) && (r <= this.half))) {
        return true;
      }
      /* Terciarios - Azul Izq */
      else if((b > g && b > r) && ((r > g) && (b <= this.half))) {
        return true;
      }
      /* Terciarios - Azul Der */
      else if((b > g && b > r) && ((r < g) && (b <= this.half))) {
        return true;
      }
      /* Terciarios - Verde Izq */
      else if((g > r && g > b) && ((b > r) && (g <= this.half))) {
        return true;
      }
      /* Terciarios - Verde Der */
      else if((g > r && g > b) && ((b < r) && (g <= this.half))) {
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
  isLight(color) {
    if(isHex(color) == true){
      var r = convertToDec(color.substring(1,3));
      var g = convertToDec(color.substring(3,5));
      var b = convertToDec(color.substring(5,7));

      /* Negro o Blanco */
      if((r == g && g == b) && (r > this.half)) {
        return true;
      }
      /* Primarios - Rojo */
      else if((r > b && b == g) && (b > this.half)) {
        return true;
      }
      /* Primarios - Verde */
      else if((g > r && r == b) && (r > this.half)) {
        return true;    
      }
      /* Primarios - Azul */
      else if((b > g && g == r) && (g > this.half)) {
        return true;         
      }
      /* Secundarios - Amarillo */
      else if((g == r && g > b) && (b > this.half)) {
        return true; 
      }
      /* Secundarios - Celeste */
      else if((b == g && b > r) && (r > this.half)) {
        return true; 
      }
      /* Secundarios - Rosado */
      else if((r == b && r > g) && (g > this.half)) {
        return true; 
      }
      /* Terciarios - Rojo Izq */
      else if((r > b && r > g) && ((g > b) && (b > this.half))) {
        return true;
      }
      /* Terciarios - Rojo Der */
      else if((r > b && r > g) && ((g < b) && (g > this.half))) {
        return true;
      }
      /* Terciarios - Azul Izq */
      else if((b > g && b > r) && ((r > g) && (g > this.half))) {
        return true;
      }
      /* Terciarios - Azul Der */
      else if((b > g && b > r) && ((r < g) && (r > this.half))) {
        return true;
      }
      /* Terciarios - Verde Izq */
      else if((g > r && g > b) && ((b > r) && (r > this.half))) {
        return true;
      }
      /* Terciarios - Verde Der */
      else if((g > r && g > b) && ((b < r) && (b > this.half))) {
        return true;
      }
    }
    return false;
  }

  /* Harmonies - Opuesto */
  opposite(color) {
    if(isHex(color) == true) {
      var r = convertToDec(color.substring(1,3));
      var g = convertToDec(color.substring(3,5));
      var b = convertToDec(color.substring(5,7));

      /* Negro o Blanco */
      if(r == g && g == b) {
          var ro = 255 - r;
          var go = 255 - g;
          var bo = 255 - b;
          return '#' + convertToHex(ro) + convertToHex(go) + convertToHex(bo);
      }
      /* Primarios - Rojo */
      else if(r > b && b == g) {
          var ro = g;
          var go = r;
          var bo = r;
          return '#' + convertToHex(ro) + convertToHex(go) + convertToHex(bo);            
      }
      /* Primarios - Verde */
      else if(g > r && r == b) {
          var ro = g;
          var go = b;
          var bo = g;
          return '#' + convertToHex(ro) + convertToHex(go) + convertToHex(bo);            
      }
      /* Primarios - Azul */
      else if(b > g && g == r) {
          var ro = b;
          var go = b;
          var bo = r;
          return '#' + convertToHex(ro) + convertToHex(go) + convertToHex(bo);            
      }
      /* Secundarios - Amarillo */
      else if(g == r && g > b) {
          var ro = b;
          var go = b;
          var bo = r;
          return '#' + convertToHex(ro) + convertToHex(go) + convertToHex(bo);
      }
      /* Secundarios - Celeste */
      else if(b == g && b > r) {
          var ro = g;
          var go = r;
          var bo = r;
          return '#' + convertToHex(ro) + convertToHex(go) + convertToHex(bo);
      }
      /* Secundarios - Rosado */
      else if(r == b && r > g) {
          var ro = g;
          var go = r;
          var bo = g;
          return '#' + convertToHex(ro) + convertToHex(go) + convertToHex(bo);
      }
      /* Terciarios - Rojo Izq */
      else if((r > b && r > g) && (g > b)) {
          var ro = b;
          var go = g;
          var bo = r;
          return '#' + convertToHex(ro) + convertToHex(go) + convertToHex(bo);
      }
      /* Terciarios - Rojo Der */
      else if((r > b && r > g) && (g < b)) {
          var ro = g;
          var go = r;
          var bo = b;
          return '#' + convertToHex(ro) + convertToHex(go) + convertToHex(bo);
      }
      /* Terciarios - Azul Izq */
      else if((b > g && b > r) && (r > g)) {
          var ro = r;
          var go = b;
          var bo = g;
          return '#' + convertToHex(ro) + convertToHex(go) + convertToHex(bo);
      }
      /* Terciarios - Azul Der */
      else if((b > g && b > r) && (r < g)) {
          var ro = b;
          var go = g;
          var bo = r;
          return '#' + convertToHex(ro) + convertToHex(go) + convertToHex(bo);
      }
      /* Terciarios - Verde Izq */
      else if((g > r && g > b) && (b > r)) {
          var ro = g;
          var go = r;
          var bo = b;
          return '#' + convertToHex(ro) + convertToHex(go) + convertToHex(bo);
      }
      /* Terciarios - Verde Der */
      else if((g > r && g > b) && (b < r)){
          var ro = r;
          var go = b;
          var bo = g;
          return '#' + convertToHex(ro) + convertToHex(go) + convertToHex(bo);
      }
    }
    return false;
  }

};