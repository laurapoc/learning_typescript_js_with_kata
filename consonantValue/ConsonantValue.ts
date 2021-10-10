// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
// For C: do not mutate input.

// More examples in test cases. Good luck!

const alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
enum vowels {
  A = "a",
  E = "e",
  I = "i",
  O = "o",
  U = "u",
}

export function solve(s: string) {
  let arrayWithReplacedVowels: Array<string> = [];
  let score: number = 0;
  let resultArray: number[] = [];
  let arrayOfResulArrays: number[][] = [];
  let arrayOfScoreAndEmptyString: Array<number | string> = [];
  let result = 0;
  s.split("").map((char) => {
    if (
      char.toLocaleLowerCase() === vowels.A ||
      char.toLocaleLowerCase() === vowels.E ||
      char.toLocaleLowerCase() === vowels.I ||
      char.toLocaleLowerCase() === vowels.O ||
      char.toLocaleLowerCase() === vowels.U
    ) {
      char = char.replace(char, " ");
    }
    arrayWithReplacedVowels.push(char);
  });
  for (const letter of arrayWithReplacedVowels) {
    if (letter !== " ") {
      score = alphabet.indexOf(letter) + 1;
      arrayOfScoreAndEmptyString.push(score);
    } else {
      arrayOfScoreAndEmptyString.push(" ");
    }
  }
  for (let i = 0; i < arrayOfScoreAndEmptyString.length; i++) {
    let element = arrayOfScoreAndEmptyString[i];
    if (element !== " ") {
      resultArray.push(+element);
    } else {
      if (resultArray.length > 0) {
        arrayOfResulArrays.push(resultArray);
      }
      resultArray = [];
    }
    if (i === arrayOfScoreAndEmptyString.length - 1 && resultArray.length > 0) {
      arrayOfResulArrays.push(resultArray);
    }
  }
  for (const array of arrayOfResulArrays) {
    if (array.reduce((a: number, b: number) => a + b) > result) {
      result = array.reduce((a: number, b: number) => a + b);
    }
  }
  return result;
}

console.log(solve("zodiac"));
console.log(solve("chruschtschov"));
