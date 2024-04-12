// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#functions-which-return-promises

// If you want to annotate the return type of a function which returns a promise, you should use the Promise type.

async function getFavoriteNumber(): Promise<number> {
  return 26;
}

function wait(duration: number) {
  return new Promise<string>((resolve) => {
    setTimeout(() => resolve("Hi"), duration)
  })
}
// Without typing it outputs unknown
wait(1000).then((value) => console.log(value.length))

export {}