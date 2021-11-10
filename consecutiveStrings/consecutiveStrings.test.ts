import { longestConsec } from "./consecutiveStrings";

describe("longestConsec", () => {
  it("returns first longest concatanated string in a given array", () => {
    const longestString = longestConsec(
      ["zone", "abigail", "theta", "form", "libe", "zas"],
      2
    );

    expect(longestString).toEqual("abigailtheta");
  });

  it("returns empty array, when given k number is bigger than given array length", () => {
    const longestString = longestConsec(
      ["zone", "abigail", "theta", "form", "libe", "zas"],
      7
    );
    expect(longestString).toEqual("");
  });
});
