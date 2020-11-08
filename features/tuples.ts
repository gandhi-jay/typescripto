// Tuple

// Array like structure where each element
// represents some property of a record.

const drink = {
	color: 'brown',
	carboneted: true,
	sugar: 40
}

// [brown, true, 40]
// We lost keys, we need to remember it.
// Tuple is looks like an array. We put values in very specific order.
// no randmization. no swaps. Only fixed order.

const pepsi = ['brown', true, 40]
// TI: const pepsi: (string | number | boolean)[]

// pepsi[0] = 40;
// pepsi[2] = 'brown';
// above breaks the meaning of the object.

const pepsi_: [string, boolean, number] = ['brown', true, 40]
// const pepsi_: [string, boolean, number]
pepsi_[1] = 40;
// Type 'number' is not assignable to type 'boolean'.

// Type alias.
type Drink = [string, boolean, number];

const pepsi__: Drink = ['brown', true, 40];

const carSpecs: [number, number] = [400, 3352]
// What numbers do mean? --> No proper understanding.

const carSpecs_ = {
	horsePower: 400,
	weight: 3354
}