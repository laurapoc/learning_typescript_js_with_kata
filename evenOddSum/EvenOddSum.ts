// Task:

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).
// Examples:

// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

export function oddOrEven(array: number[]) {
  let sum = 0;
  let result: string;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }

  return (result = sum % 2 === 0 ? "even" : "odd");
}

console.log(oddOrEven([0]));
console.log(oddOrEven([]));
console.log(oddOrEven([2, 4, 6]));
console.log(oddOrEven([-1, -5, -9]));
