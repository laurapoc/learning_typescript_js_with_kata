// Given a string, return a new string that has transformed based on the input:

import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

export function stringTransformer(str: string) {
  let arrayOfNewStrings: string[] = [];
  let reversedArray: string[] = [];
  str.split(" ").forEach((string) => {
    let newString: string = "";
    for (const letter of string) {
      newString =
        letter === letter.toUpperCase()
          ? newString + letter.toLowerCase()
          : newString + letter.toUpperCase();
    }
    arrayOfNewStrings.push(newString);
  });
  arrayOfNewStrings
    .slice()
    .reverse()
    .forEach(function (item) {
      reversedArray.push(item);
    });
  return reversedArray.join(" ");
}

console.log(stringTransformer("Example Input")); // 'iNPUT eXAMPLE'
console.log(stringTransformer("To be OR not to be That is the Question")); // 'qUESTION THE IS tHAT BE TO NOT or BE tO'
