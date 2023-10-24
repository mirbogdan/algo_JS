/*
Write a function called "getLengthOfShortestElement".

Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
*/

function getLengthOfShortestElement(arr) {
  // your code here
  const myArr = [];
  for (const el of arr) {
    myArr.push(el.length);
  }
  return arr.length == 0 ? 0 : Math.min(...myArr);
}

function getLengthOfShortestElement(arr) {
  // your code here
  const arr1 = [];
  for (const el of arr) {
    arr1.push(el.length);
  }
  const min = arr1.reduce((acc, val) => {
    return acc < val ? acc : val;
  });
  return min;
}

const array2 = [1, 2, 3, 4, 0];

// 0 + 1 + 2 + 3 + 4
const initialValue1 = 0;
const sumWithInitial1 = array1.reduce((accumulator, currentValue) =>
  accumulator < currentValue ? accumulator : currentValue
);

console.log(sumWithInitial);
// Expected output: 0

const array1 = [1, 2, 3, 4, 0];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) =>
  accumulator > currentValue ? accumulator : currentValue
);

console.log(sumWithInitial);
// Expected output: 4
