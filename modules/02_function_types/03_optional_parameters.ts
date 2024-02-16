// https://www.typescriptlang.org/docs/handbook/2/functions.html#optional-parameters


// Functions in JavaScript often take a variable number of arguments, params that we might not want to pass every time we call the function. In TypeScript, we can mark parameters as optional by appending a question mark to the parameter name. Optional parameters must be defined after all required parameters.

function printNameAndAge(name: string, age?: number) {
  console.log(name, age);
  }

const result = printNameAndAge('John');


export default {}
