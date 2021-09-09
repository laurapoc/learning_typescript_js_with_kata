// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

// Could you make a program that

//     makes this string uppercase
//     gives it sorted in alphabetical order by last name.

// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

// It can happen that in two distinct families with the same family name two people have the same first name too.
// Notes

//     You can see another examples in the "Sample tests".

// first solution:
// export function meeting(s: string): string {
//   let stringWithoutSemicolon = s.replace(/;/g, " ");
//   let arrayOfNameList = stringWithoutSemicolon.split(" ");
//   let nameListWithLastNameFirst: Array<Array<string>> = [];
//   let sortedNameListArray: Array<Array<string>> = [];
//   let sortedNameList: string = "";
//   arrayOfNameList.forEach((name) => {
//     let nameWithoutColon = name.replace(/:/g, " ");
//     let fullNameArr = nameWithoutColon.split(" ");
//     let firstName: string = "";
//     let lastName: string = "";
//     firstName = fullNameArr[0];
//     lastName = fullNameArr[1];
//     nameListWithLastNameFirst.push([`${lastName.toLocaleUpperCase()},${firstName.toUpperCase()}`]);

//     sortedNameListArray = nameListWithLastNameFirst.sort(function (a, b) {
//       if (a < b) {
//         return -1;
//       }
//       if (a > b) {
//         return 1;
//       }
//       return 0;
//     });
//   });
//   sortedNameList = `(${sortedNameListArray.join(") ").replace(/ /g, "(").replace(/,/g, ", ")})`;

//   return sortedNameList;
// }

// REFACTORED VERSION:
export function meeting(s: string): string {
  let arrayOfNameList = s.replace(/;/g, " ").split(" ");
  let nameListWithLastNameFirst: Array<Array<string>> = [];
  let sortedNameListArray: Array<Array<string>> = [];
  let sortedNameList: string = "";
  arrayOfNameList.forEach((name) => {
    let fullNameArr = name.replace(/:/g, " ").split(" ");
    nameListWithLastNameFirst.push([`${fullNameArr[1].toLocaleUpperCase()},${fullNameArr[0].toUpperCase()}`]);
    sortedNameListArray = nameListWithLastNameFirst.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
  });
  sortedNameList = `(${sortedNameListArray.join(") ").replace(/ /g, "(").replace(/,/g, ", ")})`;

  return sortedNameList;
}

console.log(
  meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill")
);
console.log(
  meeting(
    "John:Gates;Michael:Wahl;Megan:Bell;Paul:Dorries;James:Dorny;Lewis:Steve;Alex:Meta;Elizabeth:Russel;Anna:Korn;Ann:Kern;Amber:Cornwell"
  )
);
