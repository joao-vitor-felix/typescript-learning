// https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads

// Function Overloads is a feature that allows you to define multiple function signatures and implementations for the same function. This is useful when writing a function that can accept different types of parameters and return different types based on the input.

// Bad example (without function overloads)
// This way we could do something like this: sum([1, 2], 3) and that would be valid, but it's not what we want.
// function sum(a: number | number[], b?: number) {}

function sum(nums: number[]): number
function sum(a: number, b: number): number

// Good example (with function overloads)
// Typescript now knows which types are valid for the function based on the number of arguments and their types defined in the function overloads. And if we try to call the function with invalid arguments, it will throw an error.
function sum(a: number | number[], b?: number) {
  if (Array.isArray(a)) {
    return a.reduce((acc, val) => acc + val, 0)
  }
  
  if (b) {
    return a + b
  }
}

const s1 = sum([1, 2])
const s2 = sum(1, 2)

// Argument of type 'number[]' is not assignable to parameter of type 'number'
// const s3 = sum([1, 2], 4) 

export {}