// https://www.typescriptlang.org/docs/handbook/2/functions.html#void

// void represents the return value of functions which don’t return a value. It’s the inferred type any time a function doesn’t have any return statements, or doesn’t return any explicit value from those return statements

function printName(name: string) {
console.log(name);
}

// In JavaScript it would undefined, but in TypeScript it's void
const result = printName('John');


export default {}
