/**
 * 
Implement a function deepEqual that performs a deep comparison between two 
values. It returns true if two input values are deemed equal, and returns 
false if not.

You can assume there are only JSON-serializable values (numbers, strings, 
boolean, null, objects, arrays).
There wouldn't be cyclic objects, i.e. objects with circular references.
Examples
    deepEqual('foo', 'foo'); // true
    deepEqual({ id: 1 }, { id: 1 }); // true
    deepEqual([1, 2, 3], [1, 2, 3]); // true
    deepEqual([{ id: '1' }], [{ id: '2' }]); // false
 */

/**
 * @param {*} valueA
 * @param {*} valueB
 * @return {boolean}
 */
export default function deepEqual(valueA, valueB) {
  if (
    valueA == null ||
    typeof valueB == "number" ||
    typeof valueA == "boolean"
  ) {
    return isDeepEqualPrimitive(valueA, valueB);
  } else if (typeof valueA == "object" && typeof valueB == "object") {
    return isDeepEqualObject(valueA, valueB);
  } else if (Array.isArray(valueA) && Array.isArray(valueB)) {
    return isDeepEqualArray(valueA, valueB);
  }
}

function isDeepEqualPrimitive(input1, input2) {
  if (input1 == null && input2 == null) {
    return true;
  } else if (typeof input1 == typeof input2) {
    return input1 == input2;
  } else {
    return false;
  }
}

function isDeepEqualObject(obj1, obj2) {
  const arr1 = Object.values(obj1);
  const arr2 = Object.values(obj2);
  if (arr1.length == arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

function isDeepEqualArray(arr1, arr2) {
  if (arr1.length == arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
