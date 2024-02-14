/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    console.log("TImelimit", args);

    const delayedPromise = fn.apply(this, args);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => reject("Time Limit Exceed"), t);
    });

    return Promise.race([delayedPromise, promise]);
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
limited(50)
  .then((s) => console.log(s))
  .catch((e) => console.log(e)); // "Time Limit Exceeded" at t=100ms
