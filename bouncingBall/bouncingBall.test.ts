import { bouncingBall } from "./bouncingBall";

describe("bouncingBall", () => {
  it("returns number of times that ball passes in front of the window", () => {
    const bouncingBallFunction = bouncingBall(3.0, 0.66, 1.5);

    expect(bouncingBallFunction).toEqual(3);
  });
});
