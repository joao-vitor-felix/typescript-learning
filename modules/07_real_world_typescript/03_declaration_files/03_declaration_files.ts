// every d.ts file is a declaration file, it's generally used to add types to libraries as well to built-in types
// all d.ts file is automatically inferred and imported everywhere that you use your code
// If you want to add types to a library that do not have types you need to add a d.ts file, it doesn't matter how you call it, but generally you'll name the same as the library name
// Sometimes you might want to overwrite the global values that are available for you

import { times } from "lodash";

times(4);

console.superLog();
