// https://www.typescriptlang.org/docs/handbook/enums.html
// https://www.typescriptlang.org/docs/handbook/enums.html#objects-vs-enums
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions

// Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

const nums = ["1", "2", "3"] as const
const a = nums[0] // "1"
// Error: Cannot assign to '0' because it is a read-only property.
// nums[0] = 'aska'
// Error: Property 'push' does not exist on type 'readonly ["1", "2", "3"]'
// nums.push('aska') 

// This is a string-based enum, as const make the array readonly and its elements string literals
const SKILL_LEVELS = ["Beginner", "Intermediate", "Expert"] as const

type Person = {
  // skillLevel : "Beginner" | "Intermediate" | "Expert"
  skillLevel : typeof SKILL_LEVELS[number]
}

SKILL_LEVELS.forEach(skillLevel => {
  console.log(skillLevel);
})

// as const make the object and its properties readonly
const person = {
  name: "Todd",
  age: 27,
  address: {
    city: "Kansas City",
    state: "MO"
  }
} as const


export default {}