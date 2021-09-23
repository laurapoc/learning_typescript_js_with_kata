import { flattenAndSort } from "./FlattenSortArray";

describe("flattenAndSort", () => {
  it("flattens and sorts given array of arrays", () => {
    const flattenSortArray = flattenAndSort([
      [3, 2, 1],
      [7, 9, 8],
      [6, 4, 5],
    ]);

    expect(flattenSortArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
