import { address } from 'faker';

export class Location {
	private lat: number;
	private long: number;
	private _city: string;

	constructor() {
		this.lat = parseFloat(address.latitude());
		this.long = parseFloat(address.longitude());
		this._city = address.city();
	}

	get latitude(): number {
		return this.lat;
	}

	get longitude(): number {
		return this.long;
	}

	get city(): string {
		return this._city;
	}
}