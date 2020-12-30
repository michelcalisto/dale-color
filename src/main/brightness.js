function add(color, percentage) {
    if((color + percentage) >= 255) {
        return 255;
    }
    return color + percentage;
}

function subtract(color, percentage) {
    if((color - percentage) <= 0) {
        return 0;
    }
    return color - percentage;
}

module.exports = {
    add,
    subtract
}