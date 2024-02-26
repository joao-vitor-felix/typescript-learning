// https://www.typescriptlang.org/docs/handbook/2/objects.html#readonly-properties

// A property marked as readonly can’t be written to during type-checking

type Person = { 
  readonly id: number
  name: string
  age: number
}

const person: Person = {
  id: 1,
  name: 'John',
  age: 25
}

// It works when it is not readonly, but it will throw an error when it is readonly
// person.id = 2 

type NumberArray = readonly number[]

const nums: NumberArray = [1, 2, 3]

// I can't push to the array or make changes in it because it is readonly, it also removes the methods that can change the array
// nums.push(5)
// nums[0] = 10


// Using the readonly modifier doesn’t necessarily imply that a value is totally immutable - or in other words, that its internal contents can’t be changed. It just means the property itself can’t be re-written to.
interface Home {
  readonly resident: { name: string; age: number };
}
 
function visitForBirthday(home: Home) {
  // We can read and update properties from 'home.resident'.
  console.log(`Happy birthday ${home.resident.name}!`);
  home.resident.age++;
  home.resident.name = "Victor the Evictor";
}
 
function evict(home: Home) {
  // But we can't write to the 'resident' property itself on a 'Home'.
  // Cannot assign to 'resident' because it is a read-only property
  // home.resident = {
  //   name: "Victor the Evictor",
  //   age: 42,
  // };
}


export default {}