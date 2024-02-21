// https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types


// interfaces allowed us to build up new types from other types by extending them. TypeScript provides another construct called intersection types that is mainly used to combine existing object types.
// An intersection type is defined using the & operator.
// The only way to define an intersection type is by using types, it cannot be done with interfaces.
// You cannot use primitive types in intersection types, only object types.

type Person = {
  name: string
  age: number
}

type PersonWithId = Person & {
  id: string
}

const person: PersonWithId = {
  id: '1',
  name: 'John Doe',
  age: 25
}

// The syntax to do kind of the same but with interfaces is:

interface NewPerson {
  name: string
  age: number
}

interface Todo {
name: string
}

interface NewPersonWithId extends NewPerson, Todo {
  id: string
}

// If you just want to combine together two interfaces with interface syntax, you can do it like that:
interface NewPersonWithId2 extends NewPerson, Todo {}

// A type combining a type and a interface as a intersection type
type Combine = NewPersonWithId2 & Person

export default {}
