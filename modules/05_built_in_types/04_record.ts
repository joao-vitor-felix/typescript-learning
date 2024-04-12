// https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type

// Constructs an object type whose property keys are Keys and whose property values are Type
// Record<Keys, Type>

type Person = {
  name: string
  age: number
}

// type PeopleGroupedByName = {
//   [index: string]: Person[]
// }

type PeopleGroupedByName = Record<Person["name"], Person[]> // same as above

export {}