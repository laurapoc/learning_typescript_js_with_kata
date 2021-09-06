"use strict";
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
exports.__esModule = true;
exports.xo = void 0;
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
function xo(str) {
    var countX = 0;
    var countO = 0;
    str.split("").forEach(function (char) {
        char === "x" || char === "X" ? countX++ : char === "o" || char === "O" ? countO++ : countX && countO;
    });
    return countX === countO ? true : false;
}
exports.xo = xo;
xo("ooxx");
xo("xooxx");
xo("ooxXm");
xo("zpzpzpp");
