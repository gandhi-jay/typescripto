// Type annotations for Func
// Code we tell TS what type of args
// func will receive and what type of values it will return.

// Type inference
// TS figures out what type of value func will return.

const add = (a: number, b: number): number => a+b;

const addd = (a: number, b: number): number => 'asd';
//Error Type 'string' is not assignable to type 'number'.ts(2322)

// just like JAVA, TS doesn't care about logic.

const add_2 = (a: number, b: number) => a+b;
// Due to Type inference, it will check body of func, it will have number.

// const add_a_b: (a: number, b:number) => number = (a: number, b: number): number => a+b;

const sub = (a: number, b:number) => {
	// a-b; // due to TI of TS, sub will have `const sub: (a: number, b: number) => void`
	return a-b; // TI will be done. const sub: (a: number, b: number) => number
}

// TRY to take less advantage of TI less possible as such.
// Perfect project should have 0 use cases.

function divide(a: number, b: number): number {
	return a/b;
}

const multi = function(a:number, b: number): number {
	return a*b;
}

const logger = (message: string): void => {
	console.log(message);
	// return null;
	// return undefined; // BOTH are valid.
	// return 1; //Type 'number' is not assignable to type 'void'.ts(2322).
}

const throwError = (message: string): never => {
	throw new Error(message);
}
// Function will not return anything ever.
// We are not going to reach the EOF ever so never.
// So never.

/**
 * Programming language design does have a concept of bottom type that is a natural outcome as soon as you do code flow analysis.
 * TypeScript does code flow analysis (😎) and so it needs to reliably represent stuff that might never happen.
 */

const throw_error_void = (message: string): void => {
	if (!message) {
		throw new Error(message);
	}
}

const throw_error = (message: string): string => {
	if (!message) {
		throw new Error(message);
	}

	return message;
}

const todayWeather = {
	date: new Date(),
	weather: 'sunny'
};

const logWeather = (forecast: {date: Date, weather: string}): void => {
	console.log(forecast.date, forecast.weather);
}

const logWeather_es2015 = ({date, weather}: {date: Date, weather: string}) => {
	console.log(date, weather);
}

logWeather(todayWeather);