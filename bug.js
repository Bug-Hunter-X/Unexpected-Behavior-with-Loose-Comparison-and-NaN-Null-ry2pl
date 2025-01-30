function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  } else if (isNaN(x)) {
    return -1; // Handle NaN case
  }
  // ... rest of the function ...
}