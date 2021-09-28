import { decipherThis } from "./DecipherMessage";

describe("decipherThis", () => {
  it("returns deciphered string", () => {
    const decipherString = decipherThis(
      "72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o"
    );

    expect(decipherString).toEqual("Have a go at this and see how you do");
  });
});
