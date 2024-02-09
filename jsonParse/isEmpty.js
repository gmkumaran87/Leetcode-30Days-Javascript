/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmptyOld = function (obj) {
  if (Array.isArray(obj)) {
    return obj.length > 0 ? false : true;
  } else {
    return Object.keys(obj).length > 0 ? false : true;
  }
};

/**
 * Best solution with O(1) algorithm
 */
const isEmpty = function (obj) {
  for (let _ in obj) {
    return false;
  }
  return true;
};

const obj = { x: 5, y: 42 };
const arr = [2, 4, 5];
console.log(isEmpty([2, 4, 2, 4]));
