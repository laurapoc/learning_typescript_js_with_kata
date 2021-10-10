import { chooseBestSum } from "./BestTravel";

describe("chooseBestSum", () => {
  it("returns closiest distance according to the given parameters", () => {
    const bestSum = chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]);

    expect(bestSum).toEqual(228);
  });
});
