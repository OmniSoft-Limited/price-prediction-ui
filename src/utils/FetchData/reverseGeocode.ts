async function reverseGeocode(lat: number, lon: number): Promise<any> {
	const url = new URL('https://nominatim.openstreetmap.org/reverse');
	url.searchParams.set('format', 'jsonv2');
	url.searchParams.set('lat', String(lat));
	url.searchParams.set('lon', String(lon));
	url.searchParams.set('addressdetails', '1');
	// add email param if required by API policy
	const res = await fetch(url.toString(), {
		headers: { 'User-Agent': 'YourAppName/1.0 (your@email)' },
	});
	if (!res.ok) throw new Error('Reverse geocode failed');
	return res.json();
}

export default reverseGeocode;