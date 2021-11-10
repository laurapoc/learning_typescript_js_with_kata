import { mirror } from "./framedReflection";

describe("mirror", () => {
  it("returns mirror frame of a given string", () => {
    const mirrorFrame = mirror("Codewars");

    expect(mirrorFrame).toEqual("************\n* srawedoC *\n************");
  });
});
