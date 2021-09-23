import { encryptThis } from "./EncryptString";

describe("encryptThis", () => {
  it("encrypts given string", () => {
    const encryptString = encryptThis("A wise old owl lived in an oak");

    expect(encryptString).toEqual("65 119esi 111dl 111lw 108dvei 105n 97n 111ka");
  });
});
