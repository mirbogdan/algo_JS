let array = [
  1,
  3,
  5,
  [6, [4, 3, 2, [5, [7, 8, 9], 1, 7], 7], 4],
  6,
  [3, [2, 4, 5], 6],
];

//* convert this to 1 dimmension array without using flat */

function tool(arr) {
  //prepare an empty array where to push elements
  const result = [];
  //iterate over the array elements
  for (let i = 0; i < arr.length; i++) {
    // check if each element is array
    if (Array.isArray(arr[i])) {
      // use same function recursive
      result.push(...tool(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

function flatten() {
  var flat = [];
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] instanceof Array) {
      flat.push.apply(flat, flatten2.apply(this, arguments[i]));
    } else {
      flat.push(arguments[i]);
    }
  }
  return flat;
}

function flatten2(array) {
  let flatArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flatArray.push(...flatten2(array[i]));
    } else {
      flatArray.push(array[i]);
    }
  }
  return flatArray;
}

function flatten(arr) {
  //here we push arr elements (that are not arrays) with a recursion function

  let result = [];

  recursion(0, arr, result);

  return result;
}

function recursion(index, inputtArray, outputtArray) {
  if (index >= inputtArray.length) {
    return;
  }

  if (Array.isArray(inputtArray[index])) {
    recursion(0, inputtArray[index], outputtArray);
  } else {
    outputtArray.push(inputtArray[index]);
  }

  recursion(index + 1, inputtArray, outputtArray);
}

const myarr = flatten([
  1,

  3,

  5,

  [6, [4, 3, 2, [5, [7, 8, 9], 1, 7], 7], 4],

  6,

  [3, [2, 4, 5], 6],
]);

console.log(myarr);
