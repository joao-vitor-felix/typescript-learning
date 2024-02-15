// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#object-types

const person: { name: string, age: number, isProgrammer?: boolean } = {
  name: 'John',
  age: 25
}

// To type object we can use type annotation, or type inference.
// We can mark a property as optional by adding a question mark to the property name, it essentially make a union type of the property and undefined.
// This is the basic of object types in TypeScript. As the object gets more complex, we can use interfaces or type aliases to make it more readable, reusable and maintainable.
