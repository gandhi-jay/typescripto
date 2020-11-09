import { Location } from './Location';

export class GoogleMap {
	private readonly _map: google.maps.Map;

	constructor(element: HTMLElement) {
		this._map = new google.maps.Map(element, {
			zoom: 1,
			center: {
				lat: 0,
				lng: 0
			}
		})
	}

	get map(): google.maps.Map {
		return this._map;
	}
}