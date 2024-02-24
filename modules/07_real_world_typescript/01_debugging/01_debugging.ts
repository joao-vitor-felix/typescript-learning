// 1. Generally, the actual error that you getting is going to be in the last sentence or last section of your typescript error
// 2. Pretty TypeScript Error extension
// 3. Check the definition (F12) or Hold Ctrl and click to check the definition file so you can navigate between definition files and figure out where the error lives based on the types
// 4. When converting code from JavaScript to TypeScript or maybe you have some code that doesn't work quite right with TypeScript, and that is the ability to ignore errors that show up in your code with @ts-ignore (YOU SHOULD USE IT SPARINGLY, YOU CAN ALSO USE @ts-expect-error if you think It'll be fixed in the future)

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
