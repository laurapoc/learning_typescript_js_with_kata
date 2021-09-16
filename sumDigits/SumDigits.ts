// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5

export function sumDigits(n: number): number {
  const numberToStringArray = n.toString().replace(/-/g, "0").split("");
  let sum = 0;
  for (const element of numberToStringArray) {
    sum += +element;
  }
  return sum;
}

console.log(sumDigits(10));
console.log(sumDigits(99));
console.log(sumDigits(-32));
