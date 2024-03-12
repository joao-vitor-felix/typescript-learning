// https://www.typescriptlang.org/docs/handbook/2/narrowing.html

// Type guards allow you to have fairly vague types and then narrow them down to more specific types. We can do it using control flows with typeof or instanceof, or using user-defined type guards.

type Todo = {
  title: string
  priority: "High" | "Normal" | "Low"
  isComplete: boolean
  description?: string
  dueDate: Date | string
}

function extendTodo(todo: Todo) {
  // if (typeof todo.dueDate === 'string') {
  //   console.log(todo.dueDate);
  // } 

  if (todo.dueDate instanceof Date) {
    console.log(todo.dueDate);
    return
  }

  console.log(todo.dueDate);
}

export {}