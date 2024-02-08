/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  let hash = new Map();
  return function (...args) {
    let key = JSON.stringify(args);
    console.log("Key", hash);
    if (hash.has(key)) {
      return hash.get(key);
    } else {
      let value = fn.apply(this, args);
      hash.set(key, value);
      return value;
    }

    // if (hash.get(fn) === undefined) {
    //   h;
    //   return value;
    // } else if (compareArr(args, hash.get(fn).args)) {
    //   return hash.get(fn).value;
    // } else if (!compareArr(args, hash.get(fn))) {
    //   let value = fn.apply(this, args);
    //   hash.set(fn, { args, value });
    //   return value;
    // }
  };
}

function compareArr(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

let callCount = 0;

const factorial = (n) => {
  return n <= 1 ? 1 : n * factorial(n - 1);
};
const sum = (a, b) => {
  callCount += 1;
  return a + b;
};
const memoizedFn = memoize(factorial);
console.log("Return value", memoizedFn(2)); // 2
console.log("Return value2", memoizedFn(3)); // 6
console.log("Return value2", memoizedFn(2)); // 2
console.log(callCount); // 2
console.log("Return value2", memoizedFn(3)); // 6
console.log(callCount); // 2
