function compactObject(obj) {
  let outObj;
  if (Object.prototype.toString.call(obj) === "[object]") {
    outObj = {};
  } else if (Object.prototype.toString.call(obj) === "[array]") {
    outObj = [];
  }

  for (let key in obj) {
    console.log(key, obj[key], Boolean(obj[key]));
    if (Boolean(obj[key])) {
      if (
        ["[object]", "[array]"].includes(
          Object.prototype.toString.call(obj[key])
        )
      ) {
        compactObject(obj[key]);
      }
      if (typeof key !== "object") {
        return key;
      }
    }
  }
}

const obj = { a: null, b: [false, 1] };
console.log(compactObject(obj)); // {"b": [1]}
