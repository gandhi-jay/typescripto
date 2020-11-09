export class GoogleMapMarker {
    private readonly _marker: google.maps.Marker;
    private readonly _map: google.maps.Map

    constructor(map: google.maps.Map, latLng: google.maps.LatLngLiteral) {
        this._map = map;
        this._marker =  new google.maps.Marker({
            map: map,
            position: latLng
        })


    }

    addInfoWindow(content: string): GoogleMapMarker {
        this._marker.addListener('click', (): void=> {
            const infoWindow = new google.maps.InfoWindow({
                content
            });
            infoWindow.open(this._map, this._marker);
        })
        return this;
    }
}