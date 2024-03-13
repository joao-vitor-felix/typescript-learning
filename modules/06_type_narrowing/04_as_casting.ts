// https://www.w3schools.com/typescript/typescript_casting.php
// https://www.typescriptlang.org/docs/handbook/jsx.html#the-as-operator

// The as operator is used for type casting. It is a way to tell the compiler you know more about the type of an expression than it does. You shouldn't use it very much, only when you know for sure that a value is of a specific type.

type Todo = {
  title: string
}

function func(data: unknown) {
 fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(json => {
  return data as Todo;
 })
}

export {}