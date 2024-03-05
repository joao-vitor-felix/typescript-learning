// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#functions-which-return-promises

// If you have an async function the return type always need to be a promise

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