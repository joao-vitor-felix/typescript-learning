// https://www.typescriptlang.org/docs/handbook/2/keyof-types.html

// The keyof operator takes an object type and produces a string or numeric literal union of its keys
// keyof types become especially useful when combined with mapped types

type Person = {
  name: string
  age: number
}

function getValue(key: keyof Person, person: Person) {
  return person[key]
}

const name = getValue("name", { name: "John", age: 25 })

export default {}