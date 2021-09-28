// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

export function decipherThis(str: string): string {
  let stringWithNoDigits: string;
  let encryptedNumbers: string;
  let decipheredSymbols: string;
  let arrayOfEncryptedStrings: string[] = [];

  str.split(" ").forEach((string) => {
    stringWithNoDigits = string.replace(/[`0-9]/g, "");
    encryptedNumbers = string.replace(/[^0-9]/g, "");
    decipheredSymbols = String.fromCharCode(+encryptedNumbers);

    stringWithNoDigits.length === 0
      ? arrayOfEncryptedStrings.push(decipheredSymbols)
      : stringWithNoDigits.length === 1
      ? arrayOfEncryptedStrings.push(decipheredSymbols + stringWithNoDigits[0])
      : stringWithNoDigits.length >= 3
      ? arrayOfEncryptedStrings.push(
          decipheredSymbols +
            stringWithNoDigits[stringWithNoDigits.length - 1] +
            stringWithNoDigits.substr(1, stringWithNoDigits.length - 2) +
            stringWithNoDigits[0]
        )
      : arrayOfEncryptedStrings.push(
          decipheredSymbols +
            stringWithNoDigits[stringWithNoDigits.length - 1] +
            stringWithNoDigits.substr(2) +
            stringWithNoDigits[0]
        );
  });

  return arrayOfEncryptedStrings.join(" ");
}

// SOLUTION COPIED FROM KATA:
// export function decipherThis(str: string): string {
//   return str
//     .replace(/(\d+)/g, (code) => String.fromCharCode(+code))
//     .replace(/\b(\w)(\w?)(\w*)(\w)/g, "$1$4$3$2");
// }

console.log(decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o")); //'Have a go at this and see how you do'
