// https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype
// https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype

// - ReturnType constructs a type consisting of the return type of function Type
//     - ReturnType<Type>
// - Parameters constructs a tuple type from the types used in the parameters of a function type Type
//     - Parameters<Type>

function checkLength (a: string, b: number) {
  return a.length < b
}

type Func = () => void

// If it is a function you need to use the typeof operator to get the type of the function, if it is a function type, you can use the function type directly
type ReturnOfLengthCheck = ReturnType<typeof checkLength>
type ReturnOfLengthCheck2 = ReturnType<Func>

type ParametersOfLengthCheck = Parameters<typeof checkLength> // You can also access the type by the index, for example, Parameters<typeof checkLength>[0]


export {}