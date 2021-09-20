// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// SOLUTION 1:
// export class Kata {
//   static squareDigits(num: number): number {
//     let numToStringArray = num.toString().split("");
//     let squaredNumber = 0;
//     let arrayOfSquaredNumbers = [];
//     for (const el of numToStringArray) {
//       squaredNumber = +el * +el;
//       arrayOfSquaredNumbers.push(squaredNumber);
//     }

//     return +arrayOfSquaredNumbers.join("");
//   }
// }

// SOLUTION 2:
export class Kata {
  static squareDigits(num: number): number {
    let arrayOfSquaredNumbers: number[] = [];
    num
      .toString()
      .split("")
      .forEach((el) => {
        arrayOfSquaredNumbers.push(+el * +el);
      });

    return +arrayOfSquaredNumbers.join("");
  }
}

console.log(Kata.squareDigits(9119));
console.log(Kata.squareDigits(0));
