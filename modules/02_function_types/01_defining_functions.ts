// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#functions

function printName(name: string, name2: string) {
  console.log(name, name2);
}

function sum(a: number, b: number) {
  // TypeScript knows that a and b are numbers, therefore it can infer the return type. We can also explicitly specify the return type.
  // Do not use the return type annotation unless it is necessary.
  // Essentially, in TypeScript when you can infer something and it works, almost always go with the inference 'cause it's just easier to maintain and flexible for future changes.
  return a + b;
}

const result = sum(1, 2);

type Person = {
  name: string
}

function printPerson(person: Person) {
  console.log(person.name);
}

// If you try to add a property that is not defined in the type, TypeScript will throw an error. It happens when you manually define the object to warn you about params that is not meant to be there, you are explicitly passing these properties, age in this example, so TypeScript will complain.
printPerson({ name: 'John',
  // age: 24
});

const randomPerson = {
  name: 'John',
  age: 24
}

// But if you define the object in a variable, TypeScript will not throw an error. This randomPerson object could have other properties, but it must have at least the name property, that's the structured TypeScript will look for, that's what matters.
printPerson(randomPerson)
