// https://www.typescriptlang.org/docs/handbook/namespaces.html
// https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html

// It's a way to write the types for a library or built-in types that are built into JavaScript.
// Every d.ts file is a declaration file, it's generally used to add types to libraries as well to built-in types.
// All d.ts file is automatically inferred and imported everywhere that you use your code.
// If you want to add types to a library that do not have types you need to add a d.ts file, it doesn't matter how you call it, but generally you'll name the same as the library name.
// The name of the module must match the name of the library you want to add types to.
// Sometimes you might want to overwrite the global values that are available for you. When you overwrite globals you need to make sure you export something in your file, you don't need to do that when declaring a module.

import { times } from "lodash";

times(4);

console.superLog();
