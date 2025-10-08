import getGeolocation from "./geolocation";
import getPublicIP from "./getIp";

function getDeviceType(screenWidth) {
	if (screenWidth < 600) {
		return 'mobile';
	} else if (screenWidth < 1024) {
		return 'tablet';
	} else if (screenWidth < 1440) {
		return 'desktop';
	} else if (screenWidth < 1920) {
		return 'large-desktop';
	} else if (screenWidth < 2560) {
		return 'extra-large-desktop';
	} else {
		return 'unknown';
	}
}

async function collectClientInfo() {
	const info = {
		ts: new Date().toISOString(),
		timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
		language: navigator.language,
		userAgent: navigator.userAgent,
		platform: navigator.platform,
		screen: getDeviceType(window.screen.width),
	};

	try {
		info['publicIP'] = await getPublicIP();
	} catch (err) {
		info['publicIP'] = null;
	}

	try {
		info['geolocation'] = await getGeolocation();
	} catch (err) {
		info['geolocation'] = { error: err.message };
	}


	return info;
}

export default collectClientInfo;
