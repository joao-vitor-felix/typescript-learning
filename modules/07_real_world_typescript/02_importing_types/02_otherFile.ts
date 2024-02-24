import { User, me } from "./02_importing_types";
// If you're doing some code splitting and your bundler/compiler don't get the actual type from the file for some reason due code splitting, you might use something like this to import only the types from the file:
// import type { User } from "./02_importing_types";

function printUser(user: User) {
  console.log(user.name);
}

printUser(me);
