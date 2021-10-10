import { solve } from "./ConsonantValue";

describe("solve", () => {
  it("returns the highest value of consonant substrings", () => {
    const solveStringValue = solve("chruschtschov");

    expect(solveStringValue).toEqual(80);
  });
});
