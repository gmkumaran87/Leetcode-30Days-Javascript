/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  // console.log(val);
  let firstFuncValue = val;
  return {
    toBe: function (value) {
      if (firstFuncValue === value) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (value) {
      if (firstFuncValue !== value) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"
