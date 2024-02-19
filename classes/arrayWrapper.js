/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function (nums) {
  this.nums = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
  return this.nums.length > 0 ? this.nums.reduce((a, b) => a + b) : 0;
};

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
  return `[${this.nums.toString()}]`;
};

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log("Objects", obj1 + obj2); // 10

console.log("String of ", String(obj1)); // "[1,2]"
console.log("String of ", String(obj2)); // "[3,4]"
