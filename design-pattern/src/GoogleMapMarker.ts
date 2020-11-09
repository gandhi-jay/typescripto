import {IGoogleMapMappable} from "./IGoogleMapMappable";

export class GoogleMapMarker {
    private readonly _marker: google.maps.Marker;
    private readonly _map: google.maps.Map
    private readonly _mappable: IGoogleMapMappable;

    constructor(map: google.maps.Map, mappable: IGoogleMapMappable) {
        this._map = map;
        this._mappable = mappable;
        this._marker =  new google.maps.Marker({
            map: map,
            position: mappable.latLngLiteral()
        })


    }

    addInfoWindow(): GoogleMapMarker {
        this._marker.addListener('click', (): void=> {
            const infoWindow = new google.maps.InfoWindow({
                content: this._mappable.markerContent()
            });
            infoWindow.open(this._map, this._marker);
        })
        return this;
    }
}