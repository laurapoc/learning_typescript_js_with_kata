import { countSmileys } from "./SmileyFaces";

describe("countSmileys", () => {
  it('returns number 2 of smiling faces, given in an array [":)", ":(", ":D", ":O", ":;"]', () => {
    const countSmilingFaces = countSmileys([":)", ":(", ":D", ":O", ":;"]);

    expect(countSmilingFaces).toEqual(2);
  });
});
