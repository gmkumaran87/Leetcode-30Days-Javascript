/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  let accum = 0;

  return function (x) {
    if (functions.length === 0) return x;
    accum = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      accum = functions[i](accum);
    }
    return accum;
  };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);

const fn2 = compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x]);
const x = 1;
console.log(fn2(x)); // 9

// const output = compose(fn);
