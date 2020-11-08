import { User } from './User';
import { GoogleMap } from './GoogleMap';

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
const googleMap = new GoogleMap(document.getElementById('map'), user.location);
const companyMarker = googleMap.addMarker(googleMap.getLatLng(user.company.location));