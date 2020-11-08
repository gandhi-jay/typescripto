import { name } from 'faker';
import { Location } from './Location';
import { Company } from './Company';

// Could not find a declaration file for module 'faker'. '/Users/jaykiritbhai.gandhi/personal_learn/typescript/design-pattern/node_modules/faker/index.js' implicitly has an 'any' type.
// Install Type Definition File --> .d.ts

export class User {
	private _name: string;
	private _location: Location;
	private _company: Company;

	constructor() {
		this._name = `${name.firstName()} ${name.lastName()}`
		//Initially location object has not been set. NO init.
		// so, below line would throw an error.
		// lat of undefined;
		// this.location.lat = 21;
		// If location is a object.

		this._location = new Location();
		this._company = new Company();
	}

	get name(): string {
		return this._name;
	}

	get location(): Location {
		return this._location;
	}

	get company(): Company {
		return this._company;
	}
}