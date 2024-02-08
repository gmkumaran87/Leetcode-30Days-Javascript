/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let outArray = [];

  for (let i = 0; i < arr.length; i++) {
    outArray.push(fn(arr[i], i));
  }
  return outArray;
};

const arr = [1, 2, 3, 4];

const plusOneArr = map(arr, function plusI(n, i) {
  return n + i;
});

console.log(plusOneArr);
