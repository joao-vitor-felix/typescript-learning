// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates

// Type predicates is a way to narrow down the type of a variable within a conditional block. It's a way to tell the compiler that a variable is of a specific type, and it should be treated as such within that block. We shouldn't use that much or use it with caution, because we can pass a type predicate that is not true, and the compiler will not throw an error.

type Person = {
  name: string
}

type Todo = {
  title: string
}

function print(obj: Person | Todo) {
  if (isPerson(obj)) {
    console.log(obj.name)
    return
  }

  console.log(obj.title);
}

function isPerson(obj: Person | Todo): obj is Person {
  return "name" in obj
}

const PRIORITY = ["High", "Medium", "Low"] as const
type Priority = typeof PRIORITY[number]

type Todo2 = {
  title: string
  description: string
}

function func(todo: Todo2) {
  if (isPriority(todo.description)) {
    console.log(todo.description)
  } else {
    console.log(todo.description);
  }
}

function isPriority(description: string): description is Priority {
  return PRIORITY.includes(description as Priority)
}

export {}