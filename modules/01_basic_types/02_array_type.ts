// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays

const numArray = [1, 2, 3]

numArray.push(4)
// Since arrays have pass by reference instead of pass by value, and you can modified without reassigning the variable. Therefore, TypeScript understand that it is a number array and not a literal type.

// numArray.push('4')
// Argument of type 'string' is not assignable to parameter of type 'number'.

let numArray1: number[] = []
numArray1 = [1, 2, 3]

let numArray2: Array<number> = []

// We can type it by using the Array<T> syntax, by type annotation, or by type inference.

const newDate: Date[] = [new Date()]
// In this case, Date is a object type inside TypeScript. We can use things that aren't primitives all over the place, so everywhere you could normally use a primitive, you can use other things like Date and so on.
