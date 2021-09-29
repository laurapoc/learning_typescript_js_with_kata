import { stringTransformer } from "./StringTransformer";

describe("stringTransformer", () => {
  it("returns transformed string", () => {
    const transformedString = stringTransformer(
      "To be OR not to be That is the Question"
    );

    expect(transformedString).toEqual(
      "qUESTION THE IS tHAT BE TO NOT or BE tO"
    );
  });
});
