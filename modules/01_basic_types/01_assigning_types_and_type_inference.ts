// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-annotations-on-variables
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types

let a: number = 4
let b: string = 'ha'
// Explicitly declaring the type of a variable is called a type annotation.

let c = 'hello'
// TypeScript can infer the type of a variable from its value, so you don't have to explicitly declare the type of a variable if you don't want to.

const d = 8
// When you declare a variable with const it becomes a constant, a literal type, 8 in this example, so it cannot be reassigned to a different value.

// a = 'a'
// Type 'string' is not assignable to type 'number'.

// Most of the time the only time you actually need to type something is when the type cannot be inferred by TypeScript, such as variables with no values or functions.

let e = undefined
e = null
// TypeScript doens't do any type inference for undefined and null, so you can assign them to any type.

const f: "My new string" = "My new string"
// We can also use literal types to specify the exact value a variable can have.
