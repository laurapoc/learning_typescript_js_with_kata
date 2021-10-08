// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

const alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("");

export const high = (str: string): string => {
  let resultScore: number = 0;
  let resultWord: string = "";
  let arrayOfScordWords: { word: string; score: number }[] = [];
  str.split(" ").map((word) => {
    let score: number = 0;
    word.split("").map((char) => {
      score += alphabet.indexOf(char) + 1;
    });
    arrayOfScordWords.push({ word: word, score: score });
  });
  arrayOfScordWords.map((obj) => {
    if (resultScore < obj.score) {
      resultScore = obj.score;
      resultWord = obj.word;
    } else {
      resultScore = resultScore;
      resultWord = resultWord;
    }
  });
  return resultWord;
};

console.log(high("man i need a taxi up to ubud"));
