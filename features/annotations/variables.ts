
let apples: number = 5;

// apples = "!2";
apples = 12;

let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

let date: Date = new Date();

// array
let colors: string[] = ['red', 'green', 'blue'];
let myNumb: number[] = [1, 2, 3];
let dates: Date[] = [new Date(), new Date()];

// classes
class Car {}
let car: Car = new Car();

// Object Literal
let point: {x: number, y: number} = {
	x: 10,
	y: 20
}
// point = { x: 13 };
point = { x: 12, y: 32 };

// Function
// : (i: number) => void --> Func Desc.
const logNumber: (i: number) => void = (i: number) => {
	console.log(i);
}

// Type inference
let ads = 12;
// ads desc shows let ads: number
// Typescript guesses the type.
// only if we do declartaion and initialization on the same line
let ad;
ad = 12;
// shows let ad: any.

// When to use type annotations.
/**
 * 1. When fucntion returns `any` ttype and we need to clarify the value.
 * 2. When we declare a variable on one line then init later.
 * 3. When we want a var to have a type that can't be inferred.
 */

// 1.
const json = '{"x": 10, "y": 20}';
const coords = JSON.parse(json);
console.log(coords); // Check for any.

// Any --> TS has no idea what is going on.
// Fails to check for correct property references.
// AVOID VARIABLES with any at all costs.

const jsonn = '{"x": 10, "y": 20}';
const coordss: {x: number, y: number} = JSON.parse(jsonn);
// coordss.adsas; // TS gives error
// TS checks correctly for prop refs.

// 2.
const word = ['t1', 't2', 't3'];
// let foundWord;
// Variable 'foundWord' implicitly has an 'any' type, but a better type may be inferred from usage.
let foundWord: boolean;

for (let index = 0; index < word.length; index++) {
	const element = word[index];
	if (element === 't3') foundWord = true;
}

// 3.
let number = [-10, -1, 12];
let numberAboveZero = false; // If -ve assigne a value or set it to false.
// BAD CODE ALERT. We should be never doing this.

for (let index = 0; index < number.length; index++) {
	const element = number[index];
	if (element > 0) {
		numberAboveZero = element;
		// Error: Type 'number' is not assignable to type 'boolean'.ts(2322)
	}
}
// TS gives error because of type inference.

let numberr = [-10, -1, 12];
let numberAboveZeroo: boolean | number = false; // If -ve assigne a value or set it to false.
// BAD CODE ALERT. We should be never doing this.

for (let index = 0; index < number.length; index++) {
	const element = number[index];
	if (element > 0) {
		numberAboveZeroo = element;
	}
}
// OR statement. No Error. BAD PRACTICE ALERT.