"use strict";
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
exports.__esModule = true;
exports.Kata = void 0;
// If the function is passed a valid PIN string, return true, else return false.
// Examples
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.validatePin = function (pin) {
        var pinToNumber = !/\D/.test(pin);
        var length = pin.split("").length;
        return (pinToNumber && length === 4) || (pinToNumber && length === 6) ? true : false;
    };
    return Kata;
}());
exports.Kata = Kata;
console.log(Kata.validatePin("1234"));
console.log(Kata.validatePin("123456"));
console.log(Kata.validatePin("a234"));
console.log(Kata.validatePin(".234"));
console.log(Kata.validatePin("0000"));
console.log(Kata.validatePin("-12345"));
console.log(Kata.validatePin("+111"));
