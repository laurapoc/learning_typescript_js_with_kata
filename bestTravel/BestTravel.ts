// John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.

// Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible to please Mary and John?

// Example:
// With list ls and 3 towns to visit they can make a choice between: [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].

// The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.

// The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns is [55, 58, 60].

// The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters t (maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) and ls (list of distances, all distances are positive or zero integers and this list has at least one element). The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit t, if that sum exists, or otherwise nil, null, None, Nothing, depending on the language.

// With C++, C, Rust, Swift, Go, Kotlin, Dart return -1.

// Examples:
// ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163

// xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, Rust, Swift, Go, ...)

// ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228

// Notes:
// try not to modify the input list of distances ls
// in some languages this "list" is in fact a string (see the Sample Tests).

function getArrayOfOptions(
  numOfElements: number,
  givenArray: number[]
): number[][] {
  let result: number[][] = [];

  for (let i = 0; i < givenArray.length - (numOfElements - 1); i++) {
    if (numOfElements === 1) {
      result.push([givenArray[i]]);
    } else {
      let firstElement = givenArray[i];
      let otherElements: number[][] = getArrayOfOptions(
        numOfElements - 1,
        givenArray.slice(i + 1)
      );

      otherElements.forEach((arr) => {
        let newElement = [];
        newElement.push(firstElement);
        newElement = newElement.concat(arr);
        result.push(newElement);
      });
    }
  }
  return result;
}

export function chooseBestSum(
  t: number,
  k: number,
  ls: number[]
): number | null {
  let count: number | null = 0;
  let arrayOfSum: Array<number> = [];
  let result: number | null = 0;
  let arrayOfpossibleDistances: Array<Array<number>> = getArrayOfOptions(k, ls);

  for (const array of arrayOfpossibleDistances) {
    if (array.reduce((a, b) => a + b) <= t) {
      count = array.reduce((a, b) => a + b);
      arrayOfSum.push(count);
    }
  }

  for (const sum of arrayOfSum) {
    if (result !== null && sum > result) {
      result = sum;
    }
  }
  result = result !== 0 ? result : null;

  return result;
}

console.log(chooseBestSum(163, 3, [50, 55, 56, 57, 58]));
console.log(chooseBestSum(163, 3, [50]));
console.log(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]));
