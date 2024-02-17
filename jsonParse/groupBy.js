/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  let outObj = {};

  for (let i = 0; i < this.length; i++) {
    let key = fn(this[i]);
    if (outObj[key] === undefined) {
      outObj[key] = [];
    }
    outObj[key].push(this[i]);
  }
  return outObj;
};

const newArr = [1, 2, 3, 6, 7, 4, 8, 9].groupBy(String); // {"1":[1],"2":[2],"3":[3]}
// const newArr = [{ id: "1" }, { id: "1" }, { id: "2" }].groupBy((el) => el.id);
console.log("Grouped array", newArr);

function fn(n) {
  return String(n > 5);
}

console.log(fn(6));
