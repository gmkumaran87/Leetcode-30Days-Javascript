/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
  arr.sort((a, b) => {
    return fn(a) - fn(b);
  });
};

const arr = [5, 4, 1, 2, 3];
// const arr = [{ x: 1 }, { x: 0 }, { x: -1 }];
/*const arr = [
  [3, 4],
  [5, 2],
  [10, 1],
];*/
const fn = (x) => {
  console.log("Func", x);
  return x;
};

console.log("Sorted Array", sortBy(arr, fn));
