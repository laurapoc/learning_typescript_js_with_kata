// 100th Kata
// You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

import { forEachChild } from "typescript";

// 'Hello World'

// would give:
// solution.mirror('Hello World'), '*********\n* olleH *\n* dlroW *\n*********'
// solution.mirror('Codewars'), '************\n* srawedoC *\n************'

// Words in your solution should be left-aligned.

// MY COMMENT:
// long line of starts should consist the number of stars according to word length + 4 stars from both sides

export function mirror(text: string): string {
  let reversedStringArray: Array<string> = [];
  const star = "*";
  let longestWordInArray = "";
  text.split(" ").forEach((word) => {
    if (word.length > longestWordInArray.length) {
      longestWordInArray = word;
    }
    reversedStringArray.push(word.split("").reverse().join(""));
  });

  return (
    star.repeat(longestWordInArray.length) +
    "****\n* " +
    reversedStringArray.join(" *\n* ") +
    " *\n****" +
    star.repeat(longestWordInArray.length)
  );
}

console.log(mirror("Hello World"));
console.log(mirror("Codewars"));
