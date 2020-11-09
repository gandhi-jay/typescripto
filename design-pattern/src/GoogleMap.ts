export class GoogleMap {
	private readonly _map: google.maps.Map;

	constructor(element: HTMLElement, latLngLiteral?: google.maps.LatLngLiteral) {
		this._map = new google.maps.Map(element, {
			zoom: 1,
			center: {
				lat: latLngLiteral ? latLngLiteral.lat : 0,
				lng: latLngLiteral ? latLngLiteral.lng : 0
			}
		})
	}

	get map(): google.maps.Map {
		return this._map;
	}
}