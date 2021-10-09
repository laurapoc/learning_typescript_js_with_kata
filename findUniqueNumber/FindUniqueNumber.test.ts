import { findUniq } from "./FindUniqueNumber";

describe("findUniq", () => {
  it("returns unique number in an array", () => {
    const uniqueNumber = findUniq([1, 1, 1, 2, 1, 1]);

    expect(uniqueNumber).toEqual(2);
  });
});
