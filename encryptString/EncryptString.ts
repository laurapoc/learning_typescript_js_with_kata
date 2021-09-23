// Acknowledgments:

// I thank yvonne-liu for the idea and for the example tests :)
// Description:

// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

//     Your message is a string containing space separated words.
//     You need to encrypt each word in the message using the following rules:
//         The first letter must be converted to its ASCII code.
//         The second letter must be switched with the last letter
//     Keepin' it simple: There are no special characters in the input.

// Examples:

// encryptThis "Hello" == "72olle"
// encryptThis "good" == "103doo"
// encryptThis "hello world" == "104olle 119drlo"
// "A wise old owl lived in an oak" == "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"

export const encryptThis = (str: string): string => {
  let encryptedStringArray: string[] = [];

  str.split(" ").forEach((word) => {
    if (word.length > 1) {
      let stringWithoutSecondAndLastLetter = word.length >= 3 ? word.substring(2, word.length - 1) : word.substring(2);
      let letterIntoAsciiCode =
        word.length >= 3
          ? word[0].charCodeAt(0).toString() + word[word.length - 1] + stringWithoutSecondAndLastLetter + word[1]
          : word[0].charCodeAt(0).toString() + word[word.length - 1] + stringWithoutSecondAndLastLetter;
      encryptedStringArray.push(word[0].replace(word[0], letterIntoAsciiCode));
    } else if (word.length === 1) {
      encryptedStringArray.push(word.charCodeAt(0).toString());
    }
  });
  
  return encryptedStringArray.join(" ");
};

console.log(encryptThis(""));
console.log(encryptThis("A"));
console.log(encryptThis("A wise old owl lived in an oak"));


