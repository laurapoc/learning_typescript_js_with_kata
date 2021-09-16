import { sumDigits } from "./SumDigits";

describe("sumDigits", () => {
  it("returns sum 18 of given number's digits", () => {
    const sumOfDigits = sumDigits(99);

    expect(sumOfDigits).toEqual(18);
  });
});
