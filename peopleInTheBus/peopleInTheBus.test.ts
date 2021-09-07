import { number } from "./peopleInTheBus";

describe("number", () => {
  it("returns value of people left in the bus after last bus stop", () => {
    const peopleCount = number([
      [10, 0],
      [3, 5],
      [5, 8],
    ]);
    expect(peopleCount).toEqual(5);
  });
});
