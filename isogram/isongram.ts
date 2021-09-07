// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram "Dermatoglyphics" == true
// isIsogram "aba" == false
// isIsogram "moOse" == false -- ignore letter case

export function isIsogram(str: string): boolean {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if(str.toLocaleLowerCase().indexOf(char) !== str.toLocaleLowerCase().lastIndexOf(char)){
        return false;
     };
  }

  return true;
}

// SHORTCUT:
// export function isIsogram(str: string): boolean {
//   return new Set(str.toLocaleLowerCase()).size === str.length;
// }

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));
