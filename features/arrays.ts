const gtg = ['ford', 'toyota', 'chevy'];
// TI --> const gtg: string[]
const gtg_ = [];
// TI --> const gtg_: any[]
gtg_.push(1);
gtg_.push('F');

// TA
const _gtg_: string[] = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];
//TI: const dates: Date[]

const carByMake = [
	['f150'],
	['verna'],
	['camaro'],
]
// TI: const carByMake: string[][]

const carByMake_ = [
	['f150'],
	['verna'],
	['camaro'],
	[[[[[[['ford']]]]]], ['ecosport']]
]
// TI: const carByMake_: (string[] | (string[] | string[][][][][][])[])[]

// Why Typed arrays.?
// TS can do TI when extracting values from an array.
// TS can prevent us from adding incompatible values to the array.
// We can get help with map, forEach etc. funcs.
// Flexible - arrays  can still contain multiple different types.

const car = _gtg_[1];
// TI: const car: string
const car_pop = carByMake.pop();
// TI: const car_pop: string[]

// Prevent incompatible values;
carByMake.push(100);
// Argument of type 'number' is not assignable to parameter of type 'string[]'.

carByMake.map((car: string[]): string => {
	return car[0]
})
// TI of the car: (parameter) car: string[]

// Flexible types
const importantDate = [new Date(), '2020-12-20'];
// TI const importantDate: (string | Date)[]
importantDate.push('2020-12-12');
importantDate.push(new Date());
importantDate.push(123);
// Argument of type 'number' is not assignable to parameter of type 'string | Date'.

const importantDate_: (Date | string)[] = [];
importantDate_.push('2020-12-12');
importantDate_.push(1);
// Argument of type 'number' is not assignable to parameter of type 'string | Date'.
importantDate_.push(new Date());