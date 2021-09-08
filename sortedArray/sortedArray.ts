// Complete the method which accepts an array of integers, and returns one of the following:

//     "yes, ascending" - if the numbers in the array are sorted in an ascending order
//     "yes, descending" - if the numbers in the array are sorted in a descending order
//     "no" - otherwise

// You can assume the array will always be valid, and there will always be one correct answer.

export function isSortedAndHow(array: number[]): string {
  let resultAscending = 1;
  let resultDescending = array.length - 1;
  let resultNotValid = false;
  let output = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      resultNotValid = true;
    } else if (array[i] <= array[i + 1]) {
      resultAscending += 1;
    } else if (array[i] >= array[i + 1]) {
      resultDescending -= 1;
    } else if (array[1] === 0) {
      output = "no";
    }
  }
  output = resultNotValid
    ? "no"
    : array.length !== 1 && resultAscending === array.length
    ? "yes, ascending"
    : array.length !== 1 && resultDescending === 0
    ? "yes, descending"
    : "no";

  return output;
}

console.log(isSortedAndHow([1, 2, 3, 4, 8, 20]));
console.log(isSortedAndHow([1, 2, 5, 8, 50]));
console.log(isSortedAndHow([40, 39, 21, 1]));
console.log(isSortedAndHow([40, 39, 21, 12, 10, 1]));
console.log(isSortedAndHow([40, 39, 21, 4, 5, 1]));
console.log(isSortedAndHow([4, 2, 30]));
console.log(isSortedAndHow([4, 2, 30, 12, 50, 18]));
console.log(isSortedAndHow([-3, -5, 1, 2]));
console.log(isSortedAndHow([1]));
