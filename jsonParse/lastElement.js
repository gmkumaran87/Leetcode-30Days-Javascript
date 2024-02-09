/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  return this.length === 0 ? -1 : this[this.length - 1];
};

const arr = [1, 2, 3, 42, 22];
console.log(arr.last()); // 3
