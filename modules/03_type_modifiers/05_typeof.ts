// https://www.typescriptlang.org/docs/handbook/2/typeof-types.html

// TypeScript adds a typeof operator you can use in a type context to refer to the type of a variable or property

// This isn’t very useful for basic types, but combined with other type operators, you can use typeof to conveniently express many patterns. For an example, let’s start by looking at the predefined type ReturnType<T>. It takes a function type and produces its return type

const person = { name: "John", age: 30 }
const people: typeof person[] = []

people.push(person)
people.push({ name: "Jane", age: 25})


function SayHi(name: string) {
  console.log(name);
}

type FuncType = typeof SayHi

export default {}