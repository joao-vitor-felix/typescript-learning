// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator

// The satisfies operator lets us validate that the type of an expression matches some type, without changing the resulting type of that expression. It basically needs to match the minimum requirements of the type. 
// Generally, we use satisfies when we need to type something as one type, but by doing it, we lose our more specific type information, then satisfies comes in to make sure we follow the minimum requirement of a type while keeping the more specific type information.

type Todo = {
  title: string
  dueDate: string | Date
  isComplete: boolean
}

const todo = {
  title: 'asa',
  dueDate: new Date(),
  isComplete: true
} satisfies Todo

// Error: Property 'setDate' does not exist on type 'string | Date'. (while typed as Todo)
// Works fine when we use satisfies cause we are following the minimum requirement of the type by giving a Date object to the dueDate property.
todo.dueDate.setDate(4) 

export {}