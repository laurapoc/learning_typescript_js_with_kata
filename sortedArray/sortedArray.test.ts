import { isSortedAndHow } from "./sortedArray";

describe("isSortedAndHow", () => {
  it('returns "yes, ascending" if the numbers in the array are sorted in an ascending order', () => {
    const sortedArray = isSortedAndHow([1, 2, 3, 4, 8, 20]);

    expect(sortedArray).toEqual("yes, ascending");
  });

  it('returns "yes, descending" if the numbers in the array are sorted in a descending order', () => {
    const sortedArray = isSortedAndHow([20, 15, 12, 10, 8, 5 ,2]);

    expect(sortedArray).toEqual("yes, descending");
  });

  it('returns "no" if the numbers in the array are not sorted', () => {
    const sortedArray = isSortedAndHow([20, 2, 8, 15, 1, 25]);

    expect(sortedArray).toEqual("no");
  });
});
