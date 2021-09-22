import { sumPairs } from "./SumOfPairs";

describe("SumOfPairs", () => {
  it("returns the first two values [3, 7] in order of appearance that add up to form the sum", () => {
    const sumOfPairs = sumPairs([10, 5, 2, 3, 7, 5], 10);

    expect(sumOfPairs).toEqual([3, 7]);
  });
});
