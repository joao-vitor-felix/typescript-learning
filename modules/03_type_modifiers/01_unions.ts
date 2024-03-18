// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types

// Union modifiers are used to combine two or more types into a single type. It will tell TypeScript that a variable can be one of the types in the union.

let id: string | number = 7
id = '7'

type Person = {
  id: number | string
  isProgrammer?: boolean
}

type Todo = {
  name: number | string
  status: "Not Started" | "In Progress" | "Done" // This is also known as a literal type union
}

const todo: Todo = {
  name: 'Learn TypeScript', status: 'In Progress'
}

// You can make a union of multiple types, including other unions. It can also be defined inline. You can only do union with types, interfaces cannot build unions.

type TodoPerson = Person | Todo

// As you type the object by defining properties of the union, you will see that the properties of both types are available. This is because the object can be either of the types in the union. But when add properties from one of the types, if the rest of the properties is required, you'll need to add it to the object to match the type.
const obj: TodoPerson = {
  name: 'bla',
  status: "In Progress"
}

export default {}
