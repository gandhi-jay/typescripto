import { address } from 'faker';
import { IGoogleMapMappable } from "./IGoogleMapMappable";

export class Location implements IGoogleMapMappable{
	readonly lat: number;
	readonly long: number;
	private readonly _city: string;
	private _markerContent: string;

	constructor() {
		this.lat = parseFloat(address.latitude());
		this.long = parseFloat(address.longitude());
		this._city = address.city();
	}

	latitude(): number {
		return this.lat;
	}

	longitude(): number {
		return this.long;
	}

	city(): string {
		return this._city;
	}

	latLngLiteral(): google.maps.LatLngLiteral {
		return {
			lat: this.latitude(),
			lng: this.longitude()
		}
	}

	markerContent(): string {
		return this._markerContent;
	}

	setMarkerContent(content: string): Location {
		this._markerContent = content;
		return this;
	}

}