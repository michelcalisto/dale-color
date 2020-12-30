const tests = require('ava');
const DaleColor = require('../src/dale-color.js');
const palette = new DaleColor(128);

tests("Tests: Validate Hex",t => {
    t.is(palette.isHex("#64F800"), true);
    t.is(palette.isHex("#64C800F"), false);
    t.is(palette.isHex("#64C80"), false);
    t.is(palette.isHex("164C800"), false);
    t.is(palette.isHex("#64CX00"), false);
});

tests("Tests: Validate Percentage",t => {
    t.is(palette.isPercentage("0%"), true);
    t.is(palette.isPercentage(100), false);
    t.is(palette.isPercentage(-1), false);
    t.is(palette.isPercentage(101), false);
    t.is(palette.isPercentage("sol"), false);
    t.is(palette.isPercentage("50%"), true);
    t.is(palette.isPercentage("100%"), true);
    t.is(palette.isPercentage("101%"), false);
    t.is(palette.isPercentage("-1%"), false);
    t.is(palette.isPercentage("101"), false);
});

tests("Tests: Validate Dark",t => {
    /* Negro y Blanco */
    t.is(palette.isDark("#000000"), true);
    t.is(palette.isDark("#ffffff"), false);
    t.is(palette.isDark("#999999"), false);
    t.is(palette.isDark("#6e6e6e"), true);
    t.is(palette.isDark("#808080"), true);

    /* Primarios */
    t.is(palette.isDark("#ff0000"), false);
    t.is(palette.isDark("#960000"), false);
    t.is(palette.isDark("#00ff00"), false);
    t.is(palette.isDark("#009600"), false);
    t.is(palette.isDark("#0000ff"), false);
    t.is(palette.isDark("#000096"), false);
    t.is(palette.isDark("#000080"), true);

    /* Secundarios */
    t.is(palette.isDark("#ffff00"), false);
    t.is(palette.isDark("#969600"), false);
    t.is(palette.isDark("#ff00ff"), false);
    t.is(palette.isDark("#960096"), false);
    t.is(palette.isDark("#00ffff"), false);
    t.is(palette.isDark("#009696"), false);
    t.is(palette.isDark("#008080"), true);

    /* Tersarios */
    t.is(palette.isDark("#ff8000"), false);
    t.is(palette.isDark("#96503c"), false);
    t.is(palette.isDark("#ff0080"), false);
    t.is(palette.isDark("#963c50"), false);
    t.is(palette.isDark("#803c50"), true);

    t.is(palette.isDark("#8000ff"), false);
    t.is(palette.isDark("#503c96"), false);
    t.is(palette.isDark("#0080ff"), false);
    t.is(palette.isDark("#3c5096"), false);
    t.is(palette.isDark("#3c5080"), true);

    t.is(palette.isDark("#00ff80"), false);
    t.is(palette.isDark("#3c9650"), false);
    t.is(palette.isDark("#80ff00"), false);
    t.is(palette.isDark("#50963c"), false);
    t.is(palette.isDark("#50803c"), true);
});

tests("Tests: Validate Light",t => {
    /* Negro y Blanco */
    t.is(palette.isLight("#808080"), false);
    t.is(palette.isLight("#000000"), false);
    t.is(palette.isLight("#ffffff"), true);
    t.is(palette.isLight("#999999"), true);

    /* Primarios */
    t.is(palette.isLight("#ff0000"), false);
    t.is(palette.isLight("#ff9999"), true);
    t.is(palette.isLight("#00ff00"), false);
    t.is(palette.isLight("#99ff99"), true);
    t.is(palette.isLight("#0000ff"), false);
    t.is(palette.isLight("#9999ff"), true);

    /* Secundarios */
    t.is(palette.isLight("#ffff00"), false);
    t.is(palette.isLight("#ffff99"), true);
    t.is(palette.isLight("#ff00ff"), false);
    t.is(palette.isLight("#ff99ff"), true);
    t.is(palette.isLight("#00ffff"), false);
    t.is(palette.isLight("#99ffff"), true);

    /* Tersarios */
    t.is(palette.isLight("#ff8000"), false);
    t.is(palette.isLight("#ffcd9b"), true);
    t.is(palette.isLight("#ff0080"), false);
    t.is(palette.isLight("#ff9bcd"), true);

    t.is(palette.isLight("#8000ff"), false);
    t.is(palette.isLight("#cd9bff"), true);
    t.is(palette.isLight("#0080ff"), false);
    t.is(palette.isLight("#9bcdff"), true);

    t.is(palette.isLight("#00ff80"), false);
    t.is(palette.isLight("#9bffcd"), true);
    t.is(palette.isLight("#80ff00"), false);
    t.is(palette.isLight("#cdff9b"), true);
});

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