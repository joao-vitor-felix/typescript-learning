// https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype

// Readonly turns all properties into readonly, meaning you can't reassign them. It does the same as as const, but for object types.
// Readonly<Type>

type Todo = {
  title: string
  completed: boolean
}

type FinalTodod = Readonly<Todo>

export {}