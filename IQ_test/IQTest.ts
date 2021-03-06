// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

// Examples:
// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

export function iqTest(numbers: string): number {
  let arrayOfNumberString = numbers.split(" ");
  let countEven: number = 0;
  let countOdd: number = 0;
  let lastIndexOfOdd: number = 0;
  let lastIndexOfEven: number = 0;
  for (let i = 0; i < arrayOfNumberString.length; i++) {
    let number: number = +arrayOfNumberString[i];
    if (number % 2 == 1) {
      countOdd++;
      lastIndexOfOdd = i + 1;
    } else {
      countEven++;
      lastIndexOfEven = i + 1;
    }
  }
  return countOdd === 1 ? lastIndexOfOdd : lastIndexOfEven;
}

console.log(iqTest("2 4 7 8 10"));
console.log(iqTest("1 2 1 1"));
