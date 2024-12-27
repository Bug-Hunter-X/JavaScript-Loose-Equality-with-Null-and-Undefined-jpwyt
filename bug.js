function foo(x) {
  if (x == null) {
    return 0; 
  } else {
    return x + 1; 
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: 1
console.log(foo(NaN)); //Output: NaN