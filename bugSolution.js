function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  } else if (isNaN(x)) {
    return -1; // Handle NaN case
  } else if (typeof x !== 'number') {
    return -2; //Handle non-number cases
  }
  return x * 2; // Rest of the function
}
console.log(foo(null)); //Output: 0
console.log(foo(NaN)); // Output: -1
console.log(foo(10)); // Output: 20
console.log(foo('hello')); //Output: -2