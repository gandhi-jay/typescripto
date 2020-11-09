import { address } from 'faker';

export class Location {
	private readonly lat: number;
	private readonly long: number;
	private readonly _city: string;
	private _markerContent: string;

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

	get latLngLiteral(): google.maps.LatLngLiteral {
		return {
			lat: this.latitude,
			lng: this.longitude
		}
	}

	set markerContent(content: string) {
		this._markerContent = content;
	}

	get markerContent(): string {
		return this._markerContent;
	}

}