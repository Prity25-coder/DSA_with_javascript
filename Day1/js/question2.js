// Write a program to input an integer 'n' and print the sum of all its even digits and the sum of all its odd digits separately.
// eg:- Input: 'n' = 132456, Output: 12 9

function sumOfEvenOddDigit(n) {
  if (n <= 0) {
    return 0;
  }

  let evenSum = 0;
  let oddSum = 0;
  const digits = n.toString();

  for (let i = 1; i <= digits.length; i++) {
    if (i % 2 == 0) {
      evenSum = evenSum + i;
    } else {
      oddSum = oddSum + i;
    }
  }
  return [evenSum, oddSum];
}
const result = sumOfEvenOddDigit(132456);
console.log(result);
