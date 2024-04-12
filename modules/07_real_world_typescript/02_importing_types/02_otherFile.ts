import { User, me } from "./02_importing_types";
// If you're doing some code splitting and your bundler/compiler doesn't take advantage, you might import only the types from the file, it'll make sure to not include the code from the file, only the type, most of the time it's not necessary cause most bundlers are smart enough to make sure not to include the file, but it's good to know that it's possible.

// import type { User } from "./02_importing_types";

// If you have a library that is written in TypeScript, you don't need to do anything, everything will be typed. But if you're using a library written in JavaScript, you don't have the types, you can run npm i --save-dev @types/library to verify if there's a type for the library you're using, if there's not, you can create a file with the types and import it in your project.

function printUser(user: User) {
  console.log(user.name);
}

printUser(me);

export {}