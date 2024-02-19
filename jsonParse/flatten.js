/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  if (n === 0) return arr;
  let outArray = [];

  function flatten(arr, n) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && n > 0) {
        console.log("Array", arr[i], n);

        flatten(arr[i], n - 1);
      } else {
        outArray.push(arr[i]);
      }
    }
    return outArray;
  }
  return flatten(arr, n);
};

const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const n = 1;

console.log("final", flat(arr, n));
