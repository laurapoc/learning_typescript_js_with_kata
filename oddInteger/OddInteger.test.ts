import { findOdd } from "./oddInteger";

describe("OddInteger", () => {
  it("returns odd number, which is 4, because it appears 1 time in array [1,2,2,3,3,3,4,3,3,3,2,2,1]", () => {
    const oddNumber = findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);

    expect(oddNumber).toEqual(4);
  });
});
