const arr = [1, 3, "ert", false];

console.log(Array.isArray(arr));
console.log(Object.prototype.toString.call(arr)); //[object Array]
console.log(Object.prototype.toString.call(arr).slice(8, -1)); // Array
const obj = { name: "john", age: 33 };

// Object.prototype.toString.call(obj)
// '[object Object]'
// Object.prototype.toString.call(33);
// '[object Number]'
// Object.prototype.toString.call(false);
// '[object Boolean]'
// Object.prototype.toString.call('string');
// '[object String]'
console.log(typeof new Boolean());
typeof new Array() === "object";
typeof new Date() === "object";
typeof new RegExp() === "object";
