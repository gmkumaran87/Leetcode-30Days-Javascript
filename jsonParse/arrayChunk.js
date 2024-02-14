/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  if (arr.length === 0) return arr;

  if (size >= arr.length) return arr;

  let outArray = [];
  for (let i = 0; i < arr.length; i = i + size) {
    console.log("count", i);
    let innerArr = [arr[i]];
    let j = i + 1;
    let k = 1;
    while (k < size && j < arr.length) {
      console.log("Inner", k);
      innerArr.push(arr[j]);
      j++;
      k++;
    }
    outArray.push(innerArr);
  }
  return outArray;
};

const arr = [1, 9, 6, 3, 7, 2];
const size = 4;

console.log(chunk(arr, size));
