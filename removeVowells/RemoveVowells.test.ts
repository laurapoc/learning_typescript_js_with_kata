import { Kata } from "./RemoveVowells";

describe("RemoveVowells", () => {
  it("returns a string withouut vowells", () => {
    const removeVowells = Kata.disemvowel("This website is for losers LOL!");

    expect(removeVowells).toEqual("Ths wbst s fr lsrs LL!");
  });
});
