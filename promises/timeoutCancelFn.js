/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  let timer;
  timer = setTimeout(fn, t, ...args);
  console.log("Before cancellable", performance.now(), timer);
  return function cancelFn() {
    console.log("cancelling", { time: performance.now(), fn, args, t });
    clearTimeout(timer);
  };
};

const result = [];

const fn = (x) => x * 5;
const args = [2],
  t = 20,
  cancelTimeMs = 50;

const start = performance.now();

const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  console.log("log", { now: performance.now(), diff, argsArr });
  result.push({ time: diff, returned: fn(...argsArr) });
};
console.log("Before calling cancellation function", {
  start,
  now: performance.now(),
});
const cancel = cancellable(log, args, t);

const maxT = Math.max(t, cancelTimeMs);
console.log("Fn", { now: performance.now(), start, maxT, cancel });
setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
  console.log(result); // [{"time":20,"returned":10}]
}, maxT + 15);
