import { duplicateCount } from "./DuplicateCount";

describe("duplicateCount", () => {
  it("returns the count 2 of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string", () => {
    const duplicateCharCount = duplicateCount("Indivisibilities");

    expect(duplicateCharCount).toEqual(2);
  });
});
