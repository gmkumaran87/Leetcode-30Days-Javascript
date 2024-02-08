/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let accum = init ? init : nums[0];
  let index = init ? 0 : 1;

  if (nums.length === 0) return init;
  for (let i = index; i < nums.length; i++) {
    accum = fn(accum, nums[i]);
  }
  return accum;
};

const nums = [1, 2, 3, 4];
const fn = function sum(accum, curr) {
  return accum + curr;
};
const init = 0;

const fn2 = function sum(accum, curr) {
  return accum + curr * curr;
};
const init2 = 100;
const reducerVal = reduce(nums, fn2, init2);
console.log("Reducer: ", reducerVal);
