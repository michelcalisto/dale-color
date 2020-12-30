const tests = require('ava');
const DaleColor = require('../src/dale-color.js');
const palette = new DaleColor();

tests("Tests: Validates",t => {
    t.is(palette.isHex("#64Y800"), false);
    t.is(palette.isPercentage(0), true);
    t.is(palette.isDark("#808080"), true);
    t.is(palette.isLight("#808080"), false);

    // t.is(daleColor.isHex("#64C800F"), false);
    // t.is(daleColor.isHex("#64C80"), false);
    // t.is(daleColor.isHex("164C800"), false);
    // t.is(daleColor.isHex("#64CX00"), false);

    // t.is(daleColor.isPercentage(0), true);
    // t.is(daleColor.isPercentage(100), true);
    // t.is(daleColor.isPercentage(-1), false);
    // t.is(daleColor.isPercentage(101), false);
    // t.is(daleColor.isPercentage("sol"), false);
    
    // /*
    // * Negro y Blanco
    // */
    // t.is(daleColor.isDark("#000000", 128), true);
    // t.is(daleColor.isDark("#ffffff", 128), false);
    // t.is(daleColor.isDark("#999999", 128), false);
    // t.is(daleColor.isDark("#6e6e6e", 128), true);

    // /*
    // * Primarios
    // */
    // t.same(daleColor.validaciones.isOscuro("#ff0000", 200), false, 'Debería ser: false');
    // t.same(daleColor.validaciones.isOscuro("#960000", 200), true, 'Debería ser: true');
    // t.same(daleColor.validaciones.isOscuro("#00ff00", 200), false, 'Debería ser: false');
    // t.same(daleColor.validaciones.isOscuro("#009600", 200), true, 'Debería ser: true');
    // t.same(daleColor.validaciones.isOscuro("#0000ff", 200), false, 'Debería ser: false');
    // t.same(daleColor.validaciones.isOscuro("#000096", 200), true, 'Debería ser: true');

    // /*
    // * Secundarios
    // */
    // t.same(daleColor.validaciones.isOscuro("#ffff00", 200), false, 'Debería ser: false');
    // t.same(daleColor.validaciones.isOscuro("#969600", 200), true, 'Debería ser: true');
    // t.same(daleColor.validaciones.isOscuro("#ff00ff", 200), false, 'Debería ser: false');
    // t.same(daleColor.validaciones.isOscuro("#960096", 200), true, 'Debería ser: true');
    // t.same(daleColor.validaciones.isOscuro("#00ffff", 200), false, 'Debería ser: false');
    // t.same(daleColor.validaciones.isOscuro("#009696", 200), true, 'Debería ser: true');

    // /*
    // * Tersarios
    // */
    // t.same(daleColor.validaciones.isOscuro("#ff8000", 200), false, 'Debería ser: false');
    // t.same(daleColor.validaciones.isOscuro("#96503c", 200), true, 'Debería ser: true');
    // t.same(daleColor.validaciones.isOscuro("#ff0080", 200), false, 'Debería ser: false');
    // t.same(daleColor.validaciones.isOscuro("#963c50", 200), true, 'Debería ser: true');

    // t.same(daleColor.validaciones.isOscuro("#8000ff", 200), false, 'Debería ser: false');
    // t.same(daleColor.validaciones.isOscuro("#503c96", 200), true, 'Debería ser: true');
    // t.same(daleColor.validaciones.isOscuro("#0080ff", 200), false, 'Debería ser: false');
    // t.same(daleColor.validaciones.isOscuro("#3c5096", 200), true, 'Debería ser: true');

    // t.same(daleColor.validaciones.isOscuro("#00ff80", 200), false, 'Debería ser: false');
    // t.same(daleColor.validaciones.isOscuro("#3c9650", 200), true, 'Debería ser: true');
    // t.same(daleColor.validaciones.isOscuro("#80ff00", 200), false, 'Debería ser: false');
    // t.same(daleColor.validaciones.isOscuro("#50963c", 200), true, 'Debería ser: true');

});

// tests('Test de validaciones:', (t) => {
//     t.same(daleColor.isHex("#64C800"), true, 'Debería ser: true');
//     t.same(daleColor.isHex("#64C800F"), false, 'Debería ser: false');
//     t.same(daleColor.isHex("#64C80"), false, 'Debería ser: false');
//     t.same(daleColor.isHex("164C800"), false, 'Debería ser: false');
//     t.same(daleColor.isHex("#64CX00"), false, 'Debería ser: false');

//     t.same(daleColor.isPercentage(0), true, 'Debería ser: true');
//     t.same(daleColor.isPercentage(100), true, 'Debería ser: true');
//     t.same(daleColor.isPercentage(-1), false, 'Debería ser: false');
//     t.same(daleColor.isPercentage(101), false, 'Debería ser: false');
//     t.same(daleColor.isPercentage("sol"), false, 'Debería ser: false');

// //     /*
// //     * Negro y Blanco
// //     */
// //     t.same(daleColor.validaciones.isOscuro("#000000", 200), true, 'Debería ser: true');
// //     t.same(daleColor.validaciones.isOscuro("#ffffff", 200), false, 'Debería ser: false');
// //     t.same(daleColor.validaciones.isOscuro("#999999", 200), true, 'Debería ser: true');

// //     /*
// //     * Primarios
// //     */
// //     t.same(daleColor.validaciones.isOscuro("#ff0000", 200), false, 'Debería ser: false');
// //     t.same(daleColor.validaciones.isOscuro("#960000", 200), true, 'Debería ser: true');
// //     t.same(daleColor.validaciones.isOscuro("#00ff00", 200), false, 'Debería ser: false');
// //     t.same(daleColor.validaciones.isOscuro("#009600", 200), true, 'Debería ser: true');
// //     t.same(daleColor.validaciones.isOscuro("#0000ff", 200), false, 'Debería ser: false');
// //     t.same(daleColor.validaciones.isOscuro("#000096", 200), true, 'Debería ser: true');

// //     /*
// //     * Secundarios
// //     */
// //     t.same(daleColor.validaciones.isOscuro("#ffff00", 200), false, 'Debería ser: false');
// //     t.same(daleColor.validaciones.isOscuro("#969600", 200), true, 'Debería ser: true');
// //     t.same(daleColor.validaciones.isOscuro("#ff00ff", 200), false, 'Debería ser: false');
// //     t.same(daleColor.validaciones.isOscuro("#960096", 200), true, 'Debería ser: true');
// //     t.same(daleColor.validaciones.isOscuro("#00ffff", 200), false, 'Debería ser: false');
// //     t.same(daleColor.validaciones.isOscuro("#009696", 200), true, 'Debería ser: true');

// //     /*
// //     * Tersarios
// //     */
// //     t.same(daleColor.validaciones.isOscuro("#ff8000", 200), false, 'Debería ser: false');
// //     t.same(daleColor.validaciones.isOscuro("#96503c", 200), true, 'Debería ser: true');
// //     t.same(daleColor.validaciones.isOscuro("#ff0080", 200), false, 'Debería ser: false');
// //     t.same(daleColor.validaciones.isOscuro("#963c50", 200), true, 'Debería ser: true');

// //     t.same(daleColor.validaciones.isOscuro("#8000ff", 200), false, 'Debería ser: false');
// //     t.same(daleColor.validaciones.isOscuro("#503c96", 200), true, 'Debería ser: true');
// //     t.same(daleColor.validaciones.isOscuro("#0080ff", 200), false, 'Debería ser: false');
// //     t.same(daleColor.validaciones.isOscuro("#3c5096", 200), true, 'Debería ser: true');

// //     t.same(daleColor.validaciones.isOscuro("#00ff80", 200), false, 'Debería ser: false');
// //     t.same(daleColor.validaciones.isOscuro("#3c9650", 200), true, 'Debería ser: true');
// //     t.same(daleColor.validaciones.isOscuro("#80ff00", 200), false, 'Debería ser: false');
// //     t.same(daleColor.validaciones.isOscuro("#50963c", 200), true, 'Debería ser: true');

// //     /*
// //     * Negro y Blanco
// //     */
// //     t.same(daleColor.validaciones.isClaro("#000000", 100), false, 'Debería ser: false');
// //     t.same(daleColor.validaciones.isClaro("#ffffff", 100), true, 'Debería ser: true');
// //     t.same(daleColor.validaciones.isClaro("#999999", 100), true, 'Debería ser: true');

// //     /*
// //     * Primarios
// //     */
// //     t.same(daleColor.validaciones.isClaro("#ff0000", 100), false, 'Debería ser: false');
// //     t.same(daleColor.validaciones.isClaro("#ff9999", 100), true, 'Debería ser: true');
// //     t.same(daleColor.validaciones.isClaro("#00ff00", 100), false, 'Debería ser: false');
// //     t.same(daleColor.validaciones.isClaro("#99ff99", 100), true, 'Debería ser: true');
// //     t.same(daleColor.validaciones.isClaro("#0000ff", 100), false, 'Debería ser: false');
// //     t.same(daleColor.validaciones.isClaro("#9999ff", 100), true, 'Debería ser: true');
  
// //     /*
// //     * Secundarios
// //     */
// //     t.same(daleColor.validaciones.isClaro("#ffff00", 100), false, 'Debería ser: false');
// //     t.same(daleColor.validaciones.isClaro("#ffff99", 100), true, 'Debería ser: true');
// //     t.same(daleColor.validaciones.isClaro("#ff00ff", 100), false, 'Debería ser: false');
// //     t.same(daleColor.validaciones.isClaro("#ff99ff", 100), true, 'Debería ser: true');
// //     t.same(daleColor.validaciones.isClaro("#00ffff", 100), false, 'Debería ser: false');
// //     t.same(daleColor.validaciones.isClaro("#99ffff", 100), true, 'Debería ser: true');

// //     /*
// //     * Tersarios
// //     */
// //     t.same(daleColor.validaciones.isClaro("#ff8000", 100), false, 'Debería ser: false');
// //     t.same(daleColor.validaciones.isClaro("#ffcd9b", 100), true, 'Debería ser: true');
// //     t.same(daleColor.validaciones.isClaro("#ff0080", 100), false, 'Debería ser: false');
// //     t.same(daleColor.validaciones.isClaro("#ff9bcd", 100), true, 'Debería ser: true');

// //     t.same(daleColor.validaciones.isClaro("#8000ff", 100), false, 'Debería ser: false');
// //     t.same(daleColor.validaciones.isClaro("#cd9bff", 100), true, 'Debería ser: true');
// //     t.same(daleColor.validaciones.isClaro("#0080ff", 100), false, 'Debería ser: false');
// //     t.same(daleColor.validaciones.isClaro("#9bcdff", 100), true, 'Debería ser: true');

// //     t.same(daleColor.validaciones.isClaro("#00ff80", 100), false, 'Debería ser: false');
// //     t.same(daleColor.validaciones.isClaro("#9bffcd", 100), true, 'Debería ser: true');
// //     t.same(daleColor.validaciones.isClaro("#80ff00", 100), false, 'Debería ser: false');
// //     t.same(daleColor.validaciones.isClaro("#cdff9b", 100), true, 'Debería ser: true');

//     t.end();
// })

// // tests('Test de brillo:', (t) => {
// //     t.same(daleColor.brillo.aclarar("#000000",0), "#000000", 'Debería ser: #000000');
// //     t.same(daleColor.brillo.aclarar("#000000",50), "#808080", 'Debería ser: #808080');
// //     t.same(daleColor.brillo.aclarar("#000000",100), "#ffffff", 'Debería ser: #ffffff');

// //     t.same(daleColor.brillo.aclarar("#66ff66",25), "#a6ffa6", 'Debería ser: #a6ffa6');
// //     t.same(daleColor.brillo.aclarar("#66ff66",75), "#ffffff", 'Debería ser: #ffffff');

// //     t.same(daleColor.brillo.oscurecer("#ffffff",0), "#ffffff", 'Debería ser: #ffffff');
// //     t.same(daleColor.brillo.oscurecer("#ffffff",50), "#7f7f7f", 'Debería ser: #7f7f7f');
// //     t.same(daleColor.brillo.oscurecer("#ffffff",100), "#000000", 'Debería ser: #000000');

// //     t.same(daleColor.brillo.oscurecer("#ffffff",25), "#bfbfbf", 'Debería ser: #bfbfbf');
// //     t.same(daleColor.brillo.oscurecer("#ffffff",75), "#404040", 'Debería ser: #404040');

// //     t.end();
// // })

// // tests('Test de Armonias Opuestas:', (t) => {
// //     t.same(daleColor.armonias.opuesto("#000000g"), false, 'Debería ser: false');
// //     /*
// //     * Negro y Blanco
// //     */
// //     t.same(daleColor.armonias.opuesto("#000000"), "#ffffff", 'Debería ser: #ffffff');
// //     t.same(daleColor.armonias.opuesto("#ffffff"), "#000000", 'Debería ser: #000000');
// //     t.same(daleColor.armonias.opuesto("#010101"), "#fefefe", 'Debería ser: #fefefe');
// //     t.same(daleColor.armonias.opuesto("#fafafa"), "#050505", 'Debería ser: #050505');
// //     t.same(daleColor.armonias.opuesto("#C8C8C8"), "#373737", 'Debería ser: #373737');
// //     t.same(daleColor.armonias.opuesto("#373737"), "#c8c8c8", 'Debería ser: #c8c8c8');
// //     t.same(daleColor.armonias.opuesto("#646464"), "#9b9b9b", 'Debería ser: #9b9b9b');

// //     /*
// //     * Primarios
// //     */
// //     t.same(daleColor.armonias.opuesto("#ff0000"), "#00ffff", 'Debería ser: #00ffff');
// //     t.same(daleColor.armonias.opuesto("#ff6464"), "#64ffff", 'Debería ser: #64ffff');
// //     t.same(daleColor.armonias.opuesto("#00ff00"), "#ff00ff", 'Debería ser: #ff00ff');
// //     t.same(daleColor.armonias.opuesto("#64ff64"), "#ff64ff", 'Debería ser: #ff64ff');
// //     t.same(daleColor.armonias.opuesto("#0000ff"), "#ffff00", 'Debería ser: #ffff00');
// //     t.same(daleColor.armonias.opuesto("#6464ff"), "#ffff64", 'Debería ser: #ffff64');

// //     /*
// //     * Secundarios
// //     */
// //     t.same(daleColor.armonias.opuesto("#ffff00"), "#0000ff", 'Debería ser: #0000ff');
// //     t.same(daleColor.armonias.opuesto("#ffff64"), "#6464ff", 'Debería ser: #6464ff');
// //     t.same(daleColor.armonias.opuesto("#ff00ff"), "#00ff00", 'Debería ser: #00ff00');
// //     t.same(daleColor.armonias.opuesto("#ff64ff"), "#64ff64", 'Debería ser: #64ff64');
// //     t.same(daleColor.armonias.opuesto("#00ffff"), "#ff0000", 'Debería ser: #00ffff');
// //     t.same(daleColor.armonias.opuesto("#64ffff"), "#ff6464", 'Debería ser: #64ffff');

// //     /*
// //     * Tersarios
// //     */
// //     t.same(daleColor.armonias.opuesto("#ff8000"), "#0080ff", 'Debería ser: #0080ff');
// //     t.same(daleColor.armonias.opuesto("#ff8064"), "#6480ff", 'Debería ser: #6480ff');
// //     t.same(daleColor.armonias.opuesto("#ff0080"), "#00ff80", 'Debería ser: #00ff80');
// //     t.same(daleColor.armonias.opuesto("#ff6480"), "#64ff80", 'Debería ser: #64ff80');

// //     t.same(daleColor.armonias.opuesto("#8000ff"), "#80ff00", 'Debería ser: #80ff00');
// //     t.same(daleColor.armonias.opuesto("#8064ff"), "#80ff64", 'Debería ser: #80ff64');
// //     t.same(daleColor.armonias.opuesto("#0080ff"), "#ff8000", 'Debería ser: #ff8000');
// //     t.same(daleColor.armonias.opuesto("#6480ff"), "#ff8064", 'Debería ser: #ff8064');

// //     t.same(daleColor.armonias.opuesto("#00ff80"), "#ff0080", 'Debería ser: #ff0080');
// //     t.same(daleColor.armonias.opuesto("#64ff80"), "#ff6480", 'Debería ser: #ff6480');
// //     t.same(daleColor.armonias.opuesto("#80ff00"), "#8000ff", 'Debería ser: #8000ff');
// //     t.same(daleColor.armonias.opuesto("#80ff64"), "#8064ff", 'Debería ser: #8064ff');

// //     t.end();
// // })

// // tests('Test de brillo:', (t) => {
//     // t.same(daleColor.aclarar("#000000",0), "#000000", 'Debería ser: #000000');
//     // t.same(daleColor.aclarar("#000000",50), "#808080", 'Debería ser: #808080');
//     // t.same(daleColor.aclarar("#000000",100), "#ffffff", 'Debería ser: #ffffff');

//     // t.same(daleColor.aclarar("#66ff66",25), "#a6ffa6", 'Debería ser: #a6ffa6');
//     // t.same(daleColor.aclarar("#66ff66",75), "#ffffff", 'Debería ser: #ffffff');

//     // t.same(daleColor.oscurecer("#ffffff",0), "#ffffff", 'Debería ser: #ffffff');
//     // t.same(daleColor.oscurecer("#ffffff",50), "#7f7f7f", 'Debería ser: #7f7f7f');
//     // t.same(daleColor.oscurecer("#ffffff",100), "#000000", 'Debería ser: #000000');

//     // t.same(daleColor.oscurecer("#ffffff",25), "#bfbfbf", 'Debería ser: #bfbfbf');
//     // t.same(daleColor.oscurecer("#ffffff",75), "#404040", 'Debería ser: #404040');

// //     t.end();
// // })