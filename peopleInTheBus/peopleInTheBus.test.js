"use strict";
exports.__esModule = true;
var peopleInTheBus_1 = require("./peopleInTheBus");
describe("number", function () {
    it("returns value of people left in the bus after last bus stop", function () {
        var peopleCount = (0, peopleInTheBus_1.number)([
            [10, 0],
            [3, 5],
            [5, 8],
        ]);
        expect(peopleCount).toEqual(5);
    });
});
