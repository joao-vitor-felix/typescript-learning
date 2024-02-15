// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces

// To type an object in a more readable and maintainable way, we can use interfaces or type aliases. When typing an object variable both type and interface work the same.

// When defining them, there are some differences, but when using them, they are almost the same.

// The convention is CamelCase for type names.
type Person = {
  name: string,
  age: number,
  isProgrammer?: boolean
  friends: string[]
  address: {
    street: string,
  }
}

// Types can be used for objects, but also for other types as well.

type Name = string

const name: Name = 'John'

export const person: Person = {
  name: 'John',
  age: 25,
  friends: ['Alice', 'Bob'],
  address: {
    street: '123 Main St'
  }
}

// We can also use interfaces to define object types. Interfaces can only be used for objects.

// We can also rewrite the same interface many times, and it will be merged into one. Types cannot be changed after being created.

interface NewPerson {
  name: string,
  age: number,
  isProgrammer?: boolean
  friends: string[]
  address: {
    street: string,
  }
}

interface NewPerson {
  dog: string
}
