export interface IGoogleMapMappable {
    lat: number;
    long: number;
    latitude(): number;
    longitude(): number;
    city(): string;
    markerContent(): string;
    latLngLiteral(): google.maps.LatLngLiteral
}