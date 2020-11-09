import { User } from './User';
import { GoogleMap } from './GoogleMap';
import { GoogleMapMarker } from './GoogleMapMarker';

const user = new User();

console.log(JSON.stringify(user));

/**
 * Created Maps class.
 */
// const map = new google.maps.Map(document.getElementById('map'), {
// 	zoom: 1,
// 	center: {
// 		lat: user.location.latitude,
// 		lng: user.location.longitude
// 	}
// });

// TI: const map: google.maps.Map<HTMLElement>
const googleMap = new GoogleMap(document.getElementById('map'));
const userMarker = new GoogleMapMarker(googleMap.map, user.location.latLngLiteral);
const companyMarker = new GoogleMapMarker(googleMap.map, user.company.location.latLngLiteral);

user.location.markerContent = `
<div>
    <h1>User's Pin</h1>
    <h4>This is user's marker content. City: ${user.location.city}</h4>
</div>
`

user.company.location.markerContent = `
<div>
    <h1>${user.company.name}</h1>
    <h3>${user.company.catchPhrase}</h3>
    <h4>City: ${user.company.location.city}</h4>
</div>
`

userMarker.addInfoWindow(user.location.markerContent);
companyMarker.addInfoWindow(user.company.location.markerContent);