/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  // console.log("Function", fn, t);

  return async function (...args) {
    console.log("TImelimit", args);
    // fn.apply(this, args);
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        console.log("In Reject", { t, args });
        reject("Time Limit Exceeded at ");
      }, t);
      resolve(fn.apply(this, args));
    });
  };
};

const limited = timeLimit(
  (t) =>
    new Promise((res) => {
      console.log("limitted", t);
      setTimeout(res("resolved"), t);
    }),
  100
);
limited(150)
  .then((s) => console.log(s))
  .catch((e) => console.log(e)); // "Time Limit Exceeded" at t=100ms
