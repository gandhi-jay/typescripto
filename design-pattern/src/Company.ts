import { company } from 'faker';
import { Location } from './Location';

export class Company {
	private _name: string;
	private _catchPhrase: string;
	private _location: Location;

	constructor() {
		this._name = company.companyName();
		this._catchPhrase = company.catchPhrase();
		this._location = new Location();
	}

	get name(): string {
		return this._name;
	}

	get catchPhrase(): string {
		return this._catchPhrase;
	}

	get location(): Location {
		return this._location;
	}
}