// https://www.typescriptlang.org/docs/handbook/2/functions.html#rest-parameters-and-arguments
// https://www.typescriptlang.org/docs/handbook/2/functions.html#parameter-destructuring

// When you want to type something in a destructuring, providing a default value will give you a type already, so if you have default values you don't need to provide a type. 
// But if you have something that is not a default value, you need to provide a type. It can't be inline, it has to be a type for the whole object.

type Options = {
  debugMode?: boolean;
  identLevel?: number;
}

function printNameAndAge(name: string, { debugMode = false, identLevel }: Options = {}) {
  console.log(name, debugMode, identLevel);
}

printNameAndAge('asas')


// Anytime you use the rest operator you need to make sure to use the array syntax, it'll always return an array
function sum(...nums: number[]) {
  return
}

sum(1, 2, 3)


export default {}
