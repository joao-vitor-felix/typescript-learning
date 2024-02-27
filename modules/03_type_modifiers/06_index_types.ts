// https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
// https://www.typescriptlang.org/docs/handbook/2/mapped-types.html

// We can use an indexed access type to look up a specific property on another type

type Person = {
  name: string
  skillLevel: "Beginner" | "Intermediate" | "Expert"
}

const person: Person = {
  name: "John",
  skillLevel: "Expert"
}

printSkillLevel(person.skillLevel)

// We are repeating the type of the skillLevel property in the printSkillLevel function which is not ideal, with indexed access types we can avoid this repetition by transforming the type of the skillLevel property into a type that we can reuse, in this case the skillLevel type from the Person type. We could also create a type alias for the skillLevel type and reuse it in the printSkillLevel function.
function printSkillLevel(skillLevel: "Beginner" | "Intermediate" | "Expert") {
  console.log(skillLevel)
}

function printSkillLevel1(skillLevel: Person["skillLevel"]) {
  console.log(skillLevel)
}

// This will map the skillLevel property of the Person type and give back all possible values of the skillLevel property
type PeopleGroupBySkillLevel = {
  [skillLevel in Person["skillLevel"]]: Person[]
}

const a = ['aksla', 'kasl', true]

// It will map the array and give back all possible types of the a array
type A = (typeof a)[number]

const b = {
  name: 'John',
  age: 30,
  isProgrammer: true
}

// This is equivalent to the type of the values of the b object
type B = (typeof b)[keyof typeof b]

export default {}