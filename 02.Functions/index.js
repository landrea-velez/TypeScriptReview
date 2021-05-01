"use strict";
// Functions
function sum(a, b) {
  return a + b;
}
function mathOperation(callback, a, b) {
  return callback(a, b);
}
var result = mathOperation(
  function (a, b) {
    return a + b;
  },
  5,
  13
);
console.log(result);
