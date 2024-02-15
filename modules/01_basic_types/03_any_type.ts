// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any

let anyVar // inferred as any

anyVar =  3
anyVar = 'hello'


let anyVar2: any = 5

anyVar2 = 'aks'

// You lose all the benefits of TypeScript's type system when you use any, so you should avoid using it when possible.

// For the most part, you probably won't run into problems with any showing up in your code, unless you manually add it yourself or creating a variable without giving a value, or adding null or undefined as default value. But others scenarios we may run into any is if you use JSON.parse and you pass a string, the actual return of JSON.parse is any, so you have to manually type it as the type you want.

// Same thing with fetch request, it doesn't know what the return type is, so it returns any, so you have to manually type it as the type you want.

// Never use any, unless you converting a JavaScript project to TypeScript. But if you're using TypeScript from scratch, there's almost no use case, because it just shuts down TypeScript.
