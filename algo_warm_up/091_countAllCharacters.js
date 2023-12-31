/*
Write a function called "countAllCharacters".

Given a string, "countAllCharacters" returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.

Notes:
* If given an empty string, countAllCharacters should return an empty object.

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
*/

function countAllCharacters(str) {
  const myObj = {};
  const arr = [...str];
  for (const el of arr) {
    if (!myObj[el]) {
      myObj[el] = 1;
    } else {
      myObj[el] = myObj[el] += 1;
    }
  }
  return myObj;
}
const result = countAllCharacters("abracadabra");
let stringResult = "";
for (const key in result) {
  if (result.hasOwnProperty(key)) {
    stringResult = stringResult + `${key} ${population[key]}`;
  }
}
