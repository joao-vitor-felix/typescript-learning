// https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions

// When you're defining a variable as a function or a function type, you do it with the arrow function syntax.

function sumWithCallback(a: number, b: number, cb: (sum: number) => void) {
  cb(a+b)
}
type PrintNameFunc = (name: string) => number

// When you're defining the return type in a function, you do it with type annotations
function f(name: string): number {
  return 2
}

export default {}