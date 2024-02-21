// https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions

// The simplest way to describe a function is with a function type expression. These types are syntactically similar to arrow functions

function sumWithCallback(a: number, b: number, cb: (sum: number) => void) {
  cb(a+b)
}

// The only difference when you're defining the return type in a function like this, you do it with type annotations, but when you're defining something as a function, as a type, you do it with the arrow function syntax.

type PrintNameFunc = (name: string) => void

function f(name: string) {
  return 2
}

export default {}
