/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  // console.log("Rejcted", promiseArr, promiseRejAr);
  return new Promise(function (resolve, reject) {
    let promiseArr = [];
    let unresolvePromise = functions.length;

    if (unresolvePromise === 0) {
      resolve(promiseArr);
      return;
    }

    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then((promise) => {
          promiseArr[i] = promise;
          unresolvePromise--;

          if (unresolvePromise === 0) {
            resolve(promiseArr);
          }
        })
        .catch((err) => {
          console.log("Error", err);
          reject(err);
          return;
        });
    }
  });
};

const promise = promiseAll([
  () => new Promise((res) => setTimeout(() => res(42), 1000)),
  () => new Promise((res, rej) => setTimeout(() => rej(42), 100)),
]);
promise.then(console.log); // [42]
