import { high } from "./highestScoringWord";

describe("high", () => {
  it("returns string 'taxi', which is the highest scoring word in a string 'man i need a taxi up to ubud'", () => {
    const higestWord = high("man i need a taxi up to ubud");

    expect(higestWord).toEqual("taxi");
  });
});
