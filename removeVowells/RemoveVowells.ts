// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


enum vowels {
  A = "a",
  E = "e",
  I = "i",
  O = "o",
  U = "u",
}

export class Kata {
  static disemvowel(str: string): string {
    let stringArray = str.split("");
    let vowellsRemovedString = "";
    stringArray.forEach((char) => {
      if (
        char.toLocaleLowerCase() === vowels.A ||
        char.toLocaleLowerCase() === vowels.E ||
        char.toLocaleLowerCase() === vowels.I ||
        char.toLocaleLowerCase() === vowels.O ||
        char.toLocaleLowerCase() === vowels.U
      ) {
        stringArray = stringArray.filter((el) => el !== char);
      }
    });
    vowellsRemovedString = stringArray.join("");

    return vowellsRemovedString;
  }
}

console.log(Kata.disemvowel("This website is for losers LOL!"));
