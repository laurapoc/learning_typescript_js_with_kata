// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

interface Count {
  [key: number]: number;
}

export function findUniq(arr: number[]): number {
  const count = {} as Count;
  let result: number = 0;

  for (const number of arr) {
    count[number] = (count[number] || 0) + 1;
  }
  for (const el in count) {
    if (count[el] === 1) {
      result = +el;
    }
  }

  return result;
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));
console.log(findUniq([1, 0, 0, 0]));
