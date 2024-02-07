/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let currentValue = init;
  return {
    increment: function () {
      return (currentValue = currentValue + 1);
    },
    decrement: function () {
      return (currentValue = currentValue - 1);
    },
    reset: function () {
      currentValue = init;
      return init;
    },
  };
};

const counter = createCounter(0);
console.log(counter.increment()); // 6
console.log(counter.increment()); // 6
console.log(counter.decrement()); // 4
console.log(counter.reset()); // 5
console.log(counter.reset()); // 5
