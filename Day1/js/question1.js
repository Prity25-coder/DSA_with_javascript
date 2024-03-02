// Write a program that generates a multiplication table for a given integer.
// eg:- 2 = 2,4,6,8,10,12,14,16,18,20

// function multiplication(table) {
//   if (table <= 1) {
//     return 0;
//   }

//   let num;

//   for (let i = 1; i <= 10; i++) {
//     num = i * table;
//     console.log(num);
//   }
//   return num;
// }

// const result = multiplication(5);

// console.log(result);

// ================= using while loop =================

function multiplication2(table) {
  let tableNum;
  let i = 1;
  while (i <= 10) {
    tableNum = i * table;
    console.log(tableNum);
    i = i + 1;
  }
  return tableNum;
}
multiplication2(2);
