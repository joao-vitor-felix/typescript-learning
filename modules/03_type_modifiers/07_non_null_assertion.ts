// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#non-null-assertion-operator-postfix-

// It removes null or undefined from a type without any explicit checking.
// Just like other type assertions, this doesn’t change the runtime behavior of your code, so it’s important to only use ! when you know that the value can’t be null or undefined.

function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}

export {}