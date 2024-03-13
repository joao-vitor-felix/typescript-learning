// https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown

// The unknown type represents any value. This is similar to the any type, but is safer because it’s not legal to do anything with an unknown value until we narrow it down to a more specific type.

function func(data: unknown) {
  if (data != null && typeof data === 'object' && "name" in data && typeof data.name === 'string') {
  console.log(data.name.length);
  }
}

export {}