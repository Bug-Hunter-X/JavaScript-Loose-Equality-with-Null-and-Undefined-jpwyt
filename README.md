# JavaScript Loose Equality with Null and Undefined

This repository demonstrates an unexpected behavior of JavaScript's loose equality (==) operator when dealing with `null` and `undefined` values.

## The Bug

In JavaScript, the loose equality operator (==) does not always behave as expected when comparing `null` and `undefined`.  The function `foo` demonstrates this: 
* `foo(null)` returns 0 (as expected).
* However, `foo(undefined)` returns 1, which is unexpected given the loose equality check. The issue is that `undefined` is loosely equal to `null`, but adding 1 to `undefined` results in the numerical value `NaN` which is then converted to the string "NaN" by the Javascript engine before printing to the console. Javascript will perform type coercion automatically with the loose equality operator and with the + operator. This can lead to unexpected results if the programmer is not aware of Javascript's automatic type coercion.

## The Solution

The solution is to use the strict equality operator (===) which performs a more exact comparison and does not involve type coercion. The strict equality operator checks whether both operands are of the same data type and have the same value.