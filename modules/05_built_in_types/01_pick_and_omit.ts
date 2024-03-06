// https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys
// https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys

// - Pick is used for picking specific properties of a type
//     - Pick<Type, Keys>
// - Omit is used to omit specific properties of a type
//     - Omit<Type, Keys>

type Person = {
  id: string
  name: string
  age: number
  address: string
}

type SimplePerson = Pick<Person, "name" | "age">

type Todo = {
  id: string
  name: string
  status: string
  completed: boolean
}

type NewTodo = Omit<Todo, "id">

function saveTodo (todo: NewTodo): Todo {
  return {...todo, id: crypto.randomUUID()}
}

function renderTodo(todo: Todo) {
  const div = document.createElement("div")
  div.id = todo.id
}

export {}