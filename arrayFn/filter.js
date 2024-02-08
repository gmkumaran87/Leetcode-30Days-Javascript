/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let outArray = [];

  for (let i = 0; i < arr.length; i++) {
    const item = fn(arr[i], i);
    if (item) {
      outArray.push(arr[i]);
    }
  }

  return outArray;
};

const fn1 = function greaterThan10(n) {
  return n > 10;
};
const fn2 = function firstIndex(n, i) {
  return i === 0;
};

const fn3 = function plusOne(n) {
  return n + 1;
};

const arr = [-2, -1, 0, 1, 2];
const filteredArr = filter(arr, fn3);
console.log("FilteredArrays: ", filteredArr);
