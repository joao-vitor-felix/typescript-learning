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

export default {}
