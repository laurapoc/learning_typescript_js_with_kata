// Sum of Pairs

// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * entire pair is earlier, and therefore is the correct answer
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * entire pair is earlier, and therefore is the correct answer
// == [3, 7]

// Negative numbers and duplicate numbers can and will appear.

// NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

// TODO: make algorythm more simple
export function sumPairs(ints: number[], s: number): [number, number] | void {
    let sum = 0;
    let indexRez: [number, number] | undefined = undefined;
    let numPair: [number, number] | undefined = undefined;
  
    for (let i = 0; i < ints.length && (!indexRez || indexRez[1] > i); i++) {
      for (let j = i + 1; j < ints.length; j++) {
        sum = ints[i] + ints[j];
        if (sum === s && !indexRez) {
          indexRez = [i, j];
          numPair = [ints[indexRez[0]], ints[indexRez[1]]];
        } else if (sum === s && indexRez) {
          indexRez = indexRez[1] > j ? [i, j] : indexRez;
          numPair = [ints[indexRez[0]], ints[indexRez[1]]];
          break;
        }
      }
    }
  
    return numPair;
  }


const l1: number[] = [1, 4, 8, 7, 3, 15];
const l2: number[] = [1, -2, 3, 0, -6, 1];
const l3: number[] = [20, -13, 40];
const l4: number[] = [1, 2, 3, 4, 1, 0];
const l5: number[] = [10, 5, 2, 3, 7, 5];

console.log(sumPairs(l1, 8));
console.log(sumPairs(l2, -6));
console.log(sumPairs(l3, -7));
console.log(sumPairs(l4, 2));
console.log(sumPairs(l5, 10));
