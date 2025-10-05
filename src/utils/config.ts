let ROOT_URL: string;
let ENDPOINT: string;
let API_KEY: string | null;

try {
	// This will only work in Vite (or any ESM environment with import.meta)
	ROOT_URL = import.meta.env.VITE_API_URL;
	ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
	API_KEY = import.meta.env.VITE_API_KEY || null;
} catch (e) {
	// Fallback for Node/Jest
	ROOT_URL = process.env.VITE_API_URL || 'http://localhost:3000';
	ENDPOINT = process.env.VITE_API_ENDPOINT || 'api';
	API_KEY = process.env.VITE_API_KEY || null;
}

export const API_URL = `${ROOT_URL}/${ENDPOINT}`;
export { ROOT_URL, ENDPOINT, API_KEY };
