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

tests("Tests: Harmonies Opposite",t => {
    t.is(palette.opposite("#000000g"), false);

    /* Negro y Blanco */
    t.is(palette.opposite("#000000"), "#ffffff");
    t.is(palette.opposite("#ffffff"), "#000000");
    t.is(palette.opposite("#010101"), "#fefefe");
    t.is(palette.opposite("#fafafa"), "#050505");
    t.is(palette.opposite("#C8C8C8"), "#373737");
    t.is(palette.opposite("#373737"), "#c8c8c8");
    t.is(palette.opposite("#646464"), "#9b9b9b");

    /* Primarios */
    t.is(palette.opposite("#ff0000"), "#00ffff");
    t.is(palette.opposite("#ff6464"), "#64ffff");
    t.is(palette.opposite("#00ff00"), "#ff00ff");
    t.is(palette.opposite("#64ff64"), "#ff64ff");
    t.is(palette.opposite("#0000ff"), "#ffff00");
    t.is(palette.opposite("#6464ff"), "#ffff64");

    /* Secundarios */
    t.is(palette.opposite("#ffff00"), "#0000ff");
    t.is(palette.opposite("#ffff64"), "#6464ff");
    t.is(palette.opposite("#ff00ff"), "#00ff00");
    t.is(palette.opposite("#ff64ff"), "#64ff64");
    t.is(palette.opposite("#00ffff"), "#ff0000");
    t.is(palette.opposite("#64ffff"), "#ff6464");

    /* Tersarios */
    t.is(palette.opposite("#ff8000"), "#0080ff");
    t.is(palette.opposite("#ff8064"), "#6480ff");
    t.is(palette.opposite("#ff0080"), "#00ff80");
    t.is(palette.opposite("#ff6480"), "#64ff80");

    t.is(palette.opposite("#8000ff"), "#80ff00");
    t.is(palette.opposite("#8064ff"), "#80ff64");
    t.is(palette.opposite("#0080ff"), "#ff8000");
    t.is(palette.opposite("#6480ff"), "#ff8064");

    t.is(palette.opposite("#00ff80"), "#ff0080");
    t.is(palette.opposite("#64ff80"), "#ff6480");
    t.is(palette.opposite("#80ff00"), "#8000ff");
    t.is(palette.opposite("#80ff64"), "#8064ff");
});


tests("Tests: Brightness",t => {
    t.is(palette.darken("#000000", 0), false);
    t.is(palette.darken("#000000", "0%"), "#000000");
    t.is(palette.darken("#000000", "50%"), "#808080");
    t.is(palette.darken("#000000", "100%"), "#ffffff");

    t.is(palette.darken("#66ff66", "25%"), "#8cff8c");
    t.is(palette.darken("#66ff66", "75%"), "#d9ffd9");

    t.is(palette.darken("#ffffff", "0%"), "#ffffff");
    t.is(palette.darken("#ffffff", "50%"), "#ffffff");
    t.is(palette.darken("#ffffff", "100%"), "#ffffff");

    t.is(palette.darken("#ffffff", "25%"), "#ffffff");
    t.is(palette.darken("#ffffff", "75%"), "#ffffff");
});