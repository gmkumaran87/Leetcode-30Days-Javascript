/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  let arrayMap = new Map();
  let outArray = [];

  for (let i = 0; i < arr1.length; i++) {
    arrayMap.set(arr1[i].id, arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    if (arrayMap.has(arr2[i].id)) {
      arrayMap.set(arr2[i].id, { ...arrayMap.get(arr2[i].id), ...arr2[i] });
    } else {
      arrayMap.set(arr2[i].id, arr2[i]);
    }
  }
  for (const [key, value] of arrayMap) {
    outArray.push(value);
  }
  return arrayMap.entries();
};

// const arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
// const arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];

const arr1 = [
  { id: 1, x: 1 },
  { id: 2, x: 9 },
];
const arr2 = [{ id: 3, x: 5 }];

console.log(join(arr1, arr2));
/* Output
  [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9},
    {"id": 3, "x": 5}
  ]
*/
