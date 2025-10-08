// Example using the simple ipify API
async function getPublicIP(): Promise<string> {
	const res = await fetch('https://api.ipify.org?format=json');
	if (!res.ok) throw new Error('Failed to fetch IP');
	const data = await res.json();
	return data.ip; // e.g. "203.0.113.45"
}

export default getPublicIP;