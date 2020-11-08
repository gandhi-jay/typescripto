// Class => Blueprint to create an object with fields and methods.

class Task {
	state: string = 'New';
	createdAt: Date = new Date();
	updatedAt: Date = new Date();
	changeState(state: string): void {
		console.log(`Changing state to ${state} from ${this.state}`);
		this.state = state;
		this.updatedAt = new Date();
	}

	getLastUpdateOn(): void {
		console.log(`This task last update on ${this.updatedAt}`);
	}
}

const task = new Task();
task.changeState('In Process');
console.log(task.state);
task.getLastUpdateOn()


// TS classes
class Incident extends Task {
	getLastUpdateOn(): void {
		console.log(`This task updated on ${+new Date()} epoch`)
	}
}

const incident = new Incident();
incident.getLastUpdateOn();

// Modifiers.
// Public, Private, Protected.
// Public --> Can be called anytime, anywhere.
// Private --> can be called by other methods in this class.
// Protected --> can be called by other methods in this class or by other methods in child classes.

class Task_1 {
	private state: string = 'New';
	protected createdAt: Date = new Date();
	private updatedAt: Date = new Date();

	public changeState(state: string): void {
		console.log(`Changing state to ${state} from ${this.state}`);
		this.state = state;
		this.updatedAt = new Date();
	}

	public getLastUpdateOn(): void {
		console.log(`This task last update on ${this.updatedAt}`);
	}
}

class Incident_1 extends Task_1 {
	private getLastUpdateOn(): void {
		console.log(`This task updated on ${+new Date()} epoch`)
	}
}
// Can't. You can not change modifiers of the inherited methods.


class Incident_2 extends Task_1 {
	public getLastUpdateOn(): void {
		console.log(`This task updated on ${+new Date()} epoch but created on ${this.createdAt}`);
	}
}

// Fields
class Vehicle {
	color: string;

	constructor(color: string) {
		this.color = color;
	}
}

const ford = new Vehicle('grey');

// Equivalent.
class Vehicle_ {
	constructor(public color: string) {}
}

const hyundai_i20 = new Vehicle_('white');

// private fields
class Vehicle__ {
	constructor(private color: string) {}
	getColor(): string {
		return this.color;
	}
}

// Fields with inheritance.
class SUV extends Vehicle {
	private drive(): void {
		console.log('Drive Mode enable');
	}
}

// const gloster = new SUV();
// An argument for 'color' was not provided.
const gloster = new SUV('grey');
console.log(gloster.color);


class SUV_ extends Vehicle_ {
	// constructor(private is4WD: boolean) {}
	// Constructors for derived classes must contain a 'super' call.

	constructor(private is4WD: boolean, color: string) {
		super(color);
	}

	private drive(): void {
		console.log('Drive Mode enable');
	}
}

const gloster_new = new SUV_(true, 'blue');

// When to use this?
// STRONG code use.