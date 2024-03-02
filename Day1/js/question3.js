// Write a program that takes a number as input and prints all its factors except 1 and the number itself.. If the number has only two factors (1 and the number itself), then the program should print -1.

// eg:- Sample Input 1 :8,  Sample Output 1 :2 4

function factors(num) {
  let fact = false;
  
  // if (num % num == 0 && num % 1 == 0) {
  //   return -1;
  // }

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      fact = true;
      console.log(i);
    }
  }
  // if (!fact) {
  //   return -1;
  // }
  
}
const result = factors(11);
// console.log(result);
