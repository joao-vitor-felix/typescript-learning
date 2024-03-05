// https://www.typescriptlang.org/docs/handbook/2/generics.html
// https://www.typescriptlang.org/docs/handbook/2/functions.html#generic-functions

// Generics allow you to say that a function, type, or interface can be any type at all, but you pass the type as an argument when you call it.
// Generics in TypeScript is really common and a lot of the generics that you use are already built into JavaScript or the library you use.

function getSecond<T>(array: T[]) {
  return array[1]
}

const a = [1, 2, 3]
const b = ['as', 'as21', 'f1g21']

// In this case, the type of T is inferred from the type of the argument, so we don't need to pass it explicitly. But you can also pass it explicitly if you want to.
const ret = getSecond<number>(a)
const ret2 = getSecond(b)

// The syntax is the same for interfaces and types. We can also define default values if we want to.
type APIResponse<TData> = {
  data: TData
  isError?: boolean
}

type APIResponseWithDefaultValue<TData = { status: number }> = {
  data: TData
  isError?: boolean
}

// If we know our data will always be an object, we can prevent other types than objects.
type APIResponse1<TData extends object> = {
  data: TData
  isError?: boolean
}

type UserResponse = APIResponse<{ name: string, age: number }>
type BlogResponse = APIResponse<{ title: string }>

const c: UserResponse = {
  data: {
    name: 'John',
    age: 21
  },
  isError: false
}

const d: BlogResponse = {
  data: {
   title: 'My blog'
  },
  isError: false
}


function aToO<T>(array: [string, T][]) {
  const obj: { [index: string]: T } = {}

  array.forEach(([key, value]) => {
    obj[key] = value
  })

  return obj
}

const arr: [string, number | boolean][] = [
  ["keyOne", 1], 
  ["keyTwo", 2], 
  ["keyThree", true]
]

const obj = aToO(arr)

export default {}