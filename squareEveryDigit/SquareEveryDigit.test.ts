import { Kata } from "./SquareEveryDigit";

describe("Kata.squareDigits", () => {
  it("returns squared every given digit of a number and concatenates them", () => {
    const squareDigits = Kata.squareDigits(9119);

    expect(squareDigits).toEqual(811181);
  });
});
