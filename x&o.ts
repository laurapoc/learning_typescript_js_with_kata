// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

export function xo(str: string) {
  let countX: number = 0;
  let countO: number = 0;
  str.split("").forEach((char) => {
    char === "x" || char === "X" ? countX++ : char === "o" || char === "O" ? countO++ : countX && countO;
  });
  return countX === countO ? true : false;
}
xo("ooxx");
xo("xooxx");
xo("ooxXm");
xo("zpzpzpp");
