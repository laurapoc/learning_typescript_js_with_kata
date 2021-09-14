import { oddOrEven } from "./EvenOddSum";

describe("oddOrEven", () => {
  it('returns string "even" when sum of numbers in an array is even', () => {
    const evenOddSum = oddOrEven([0, 2, 4, 8]);

    expect(evenOddSum).toEqual("even");
  });

  it('returns string "odd" when sum of numbers in an array is odd', () => {
    const evenOddSum = oddOrEven([1, 3, 5, 8]);

    expect(evenOddSum).toEqual("odd");
  });
});
