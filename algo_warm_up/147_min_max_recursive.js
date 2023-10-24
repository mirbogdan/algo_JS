const arr = [13, 24, 25, 12, 19, 27, 15, 16];

let maximum = arr[0];
let min = arr[0];

const sum = (arr, index) => {
  if (index === arr.length) {
    return;
  }

  if (max < arr[index]) {
    max = arr[index];
  }

  if (min > arr[index]) {
    min = arr[index];
  }

  sum(arr, index + 1);
};

sum(arr, 1);

console.log(min);
console.log(maximum);
console.log(min + maximum);

// let max = arr[0];
function max(arr, index) {
  if (max < arr[index]) {
    max = arr[index];
  }
  max(arr, index + 1);
}
