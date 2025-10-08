type GeolocationData = {
	latitude: number;
	longitude: number;
	accuracyMeters?: number;
	altitude?: number | null;
	altitudeAccuracy?: number | null;
};

type ConnectionData = {
	effectiveType?: string; // e.g., '4g', '3g'
	downlink?: number; // Mbps
	rtt?: number; // ms
	saveData?: boolean;
};

type ScreenData = {
	width: number;
	height: number;
	availWidth: number;
	availHeight: number;
};

type ViewportData = {
	width: number;
	height: number;
};

type UserData = {
	ts: string; // timestamp ISO string
	publicIP?: string | null; // public IP if available
	geolocation?: GeolocationData | { error: string }; // user denied / unavailable
	timezone: string | null;
	language: string | null;
	languages?: string[] | null;
	userAgent: string;
	platform: string;
	screen: ScreenData;
	viewport: ViewportData;
	connection?: ConnectionData | null;
};

export type Contact = {
	name: string;
	email: string;
	phone: string;
	message: string;
    user_data: UserData;
};
