// https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype

// Awaited is used to obtain the type that is awaited from a Promise. It specifically unwraps the Promise and returns the type that the Promise resolves to.

type Async = Promise<string>

type Value = Awaited<Async> // string


async function doSomething() {
  return 3
}

type Value2 = Awaited<ReturnType<typeof doSomething>> // number

export {}