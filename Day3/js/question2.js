// Insert element in array

let array = [50, 20, 40, 60, 80];
let insertElement = 10;
let insertPosition = 2;
// output = [50, 20, 10, 40, 60, 80];
console.log(array);

for (let i = array.length - 1; i >= 0; i--) {
  if (i >= insertPosition) {
    array[i + 1] = array[i];
    if (i == insertPosition) {
      array[i] = insertElement;
    }
  }
}
console.log(array);

// ------------------2nd method---------------
let array1 = [1, 2, 3, 7, 6];
let insertArray = array1.splice(2, 0, 10);
console.log(array1); // 1,2,10,3,7,6
