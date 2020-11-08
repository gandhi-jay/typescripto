import { Location } from './Location';

export class GoogleMap {
	private map: google.maps.Map;
	private LatLng: google.maps.LatLngLiteral;

	constructor(element: HTMLElement, location: Location, shouldCreateMarkerInstance: boolean = true) {
		this.LatLng = this.getLatLng(location);
		this.map = new google.maps.Map(element, {
			zoom: 1,
			center: this.LatLng
		})

		if (shouldCreateMarkerInstance) {
			this.addMarker(this.LatLng);
		}
	}

	getLatLng(location: Location): google.maps.LatLngLiteral {
		return {
			lat: location.latitude,
			lng: location.longitude
		}
	}

	addMarker(latLng: google.maps.LatLngLiteral): google.maps.Marker  {
		return new google.maps.Marker({
			map: this.map,
			position: latLng
		})
	}
}