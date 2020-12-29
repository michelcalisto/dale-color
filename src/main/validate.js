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

// /*
// * Rojo = (255,0,0);
// * Verde = (0,255,0);
// * Azul = (0,0,255);
// * 
// * mientras mas cercano al 255 más claro será
// * number corresponde a un number rgb (0-255)
// * isClaro(#ffffff, 180)
// * es mayor que 180
// */

// function isLight(color, number) {
//     if(isHex(color) == true){
//         var r = convertToDec(color.substring(1,3))
//         var g = convertToDec(color.substring(3,5))
//         var b = convertToDec(color.substring(5,7))

//         /* 
//         * Negro o Blanco
//         */
//         if(r == g && g == b){
//             if(r > number) {
//                 return true
//             } else{
//                 return false
//             }
//         }
//         /*
//         * Primarios
//         * Rojo
//         */
//         else if(r > b && b == g){
//             if(b > number) {
//                 return true
//             } else{
//                 return false
//             }           
//         }
//         /*
//         * Verde
//         */
//         else if(g > r && r == b){
//             if(r > number) {
//                 return true
//             } else{
//                 return false
//             }     
//         }
//         /*
//         * Azul
//         */
//         else if(b > g && g == r){
//             if(g > number) {
//                 return true
//             } else{
//                 return false
//             }          
//         }
//         /*
//         * Secundarios
//         * Amarillo
//         */
//         else if(g == r && g > b){
//             if(b > number) {
//                 return true
//             } else{
//                 return false
//             }  
//         }
//         /*
//         * Celeste
//         */
//         else if(b == g && b > r){
//             if(r > number) {
//                 return true
//             } else{
//                 return false
//             }  
//         }
//         /*
//         * Rosado
//         */
//         else if(r == b && r > g){
//             if(g > number) {
//                 return true
//             } else{
//                 return false
//             }  
//         }
//         /*
//         * Tersarios
//         */
//         else if(r > b && r > g){
//             /*
//             * Rojo Izq
//             */
//             if(g > b){
//                 if(b > number) {
//                     return true
//                 } else{
//                     return false
//                 }  
//             }
//             /*
//             * Rojo Der
//             */
//             else if(g < b){
//                 if(g > number) {
//                     return true
//                 } else{
//                     return false
//                 }  
//             }
//         }
//         else if(b > g && b > r){
//             /*
//             * Azul Izq
//             */
//             if(r > g){
//                 if(g > number) {
//                     return true
//                 } else{
//                     return false
//                 }  
//             }
//             /*
//             * Azul Der
//             */
//             else if(r < g){
//                 if(r > number) {
//                     return true
//                 } else{
//                     return false
//                 }  
//             }
//         }
//         else if(g > r && g > b){
//             /*
//             * Verde Izq
//             */
//             if(b > r){
//                 if(r > number) {
//                     return true
//                 } else{
//                     return false
//                 }  
//             }
//             /*
//             * Verde Der
//             */
//             else if(b < r){
//                 if(b > number) {
//                     return true
//                 } else{
//                     return false
//                 }  
//             }
//         }
//     }else{
//         return false
//     }
// }

module.exports = {
    isHex,
    isPercentage
}