// https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
// https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype

// - Partial sets all properties of a type to optional.
//     - Partial<Type>
// - Required sets all properties of a type to required.
//     - Required<Type>

type Todo = {
  title: string
  completed: boolean
}

type FormTodo = Partial<Todo>

type Todo2 = {
  title?: string
  completed: boolean
  address?: {
    street?: string
  }
}

type FormTodo2 = Required<Todo2>

type FormTodo3 = Required<Pick<Todo2, "title">> & Omit<Todo, "title">
// type FormTodo3 = Required<Pick<Todo2, "title">> & Todo // Also works, a required property overrides an optional one

// When it comes to the same property, the required one wins, so in this case, you need to use Omit
type FormTodo4 = Partial<Pick<Todo2, "title">> & Omit<Todo, "title">

type RequiredPick<T, K extends keyof T> = Required<Pick<T, K>> & T
type PartialPick<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>

type NewType = RequiredPick<Todo2, "title">

const todo: NewType = {
  title: "Learn TypeScript",
  completed: false,
}


export {}