// 1. Generally, the actual error that you getting is going to be in the last sentence or last section of your typescript error.
// 2. Pretty TypeScript Error extension.
// 3. Check the definition (F12) or Hold Ctrl and click to check the definition file so you can navigate between definition files and figure out where the error lives based on the types.
// 4. When converting code from JavaScript to TypeScript or maybe you have some code that doesn't work quite right with TypeScript, whether it is a bug or types from some library you're using are wrong, and that is the ability to ignore errors that show up in your code with @ts-ignore (YOU SHOULD USE IT SPARINGLY, YOU CAN ALSO USE @ts-expect-error if you think It'll be fixed in the future, you can also describe the error with a comment, when it does get fixed, Typescript will alert you with an error saying there's no error happening on that specific line anymore).

type Options = {
  debug: boolean;
  format: {
    tabs: boolean;
    tabWidth: number;
  };
};

function printNumber(num: number, options?: Options) {
  console.log(num);
}

printNumber(3);

export {}
