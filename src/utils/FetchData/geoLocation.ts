import { GeolocationData } from "../../types/contact";

function getGeolocation(timeout: number = 10000): Promise<GeolocationData> {
	return new Promise((resolve, reject) => {
		if (!navigator.geolocation) {
			return reject(new Error('Geolocation not supported'));
		}
		navigator.geolocation.getCurrentPosition(
			(pos) =>
				resolve({
					latitude: pos.coords.latitude,
					longitude: pos.coords.longitude,
					accuracyMeters: pos.coords.accuracy,
					altitude: pos.coords.altitude,
					altitudeAccuracy: pos.coords.altitudeAccuracy,
				}),
			(err) => reject(err),
			{ enableHighAccuracy: true, timeout, maximumAge: 0 }
		);
	});
}

export default getGeolocation;