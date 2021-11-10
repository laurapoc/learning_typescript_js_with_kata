// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:

// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

export function longestConsec(strarr: string[], k: number): string {
  let result = "";
  for (let i = 0; i < strarr.length; i++) {
    let newString = "";
    for (let y = i; y < i + k && y < strarr.length; y++) {
      newString = newString + strarr[y];
      if (newString.length > result.length) {
        result = newString;
      }
    }
  }

  return strarr.length < k ? "" : result;
}

console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
);
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 6));
console.log(
  longestConsec(
    [
      "ejjjjmmtthh",
      "zxxuueeg",
      "aanlljrrrxx",
      "dqqqaaabbb",
      "oocccffuucccjjjkkkjyyyeehh",
    ],
    1
  )
);
console.log(
  longestConsec(
    ["treefoling", "folingtrashy", "trashyblue", "blueabcdef", "abcdefuvwxyz"],
    1
  )
);
console.log(longestConsec(["itwkppvixoyx3452zzzzzzzzzzzz"], 1));
