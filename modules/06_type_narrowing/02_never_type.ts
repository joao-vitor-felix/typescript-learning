// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type
// https://www.typescriptlang.org/docs/handbook/2/functions.html#never

// When narrowing, you can reduce the options of a union to a point where you have removed all possibilities and have nothing left. In those cases, TypeScript will use a never type to represent a state which shouldn’t exist.

// The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.

type Todo = {
  title: string
  priority: "High" | "Normal" | "Low"
  isComplete: boolean
  description?: string
  dueDate: Date | string
}

function extendTodo(todo: Todo) {
  switch(todo.priority) {
    case "High":
      console.log(todo.priority);
      break
    case "Normal":
      console.log(todo.priority);
      break
    case "Low":
      console.log(todo.priority);
      break
    default:
      // We can use a variable with the never type as a guard to ensure that the switch is exhaustive, it other words, if we are missing a case, the compiler will let us know.
      const _exhaustiveCheck: never = todo.priority;
      return _exhaustiveCheck;
  }
}


export {}