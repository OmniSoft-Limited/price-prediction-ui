// jest.setup.ts
Object.defineProperty(globalThis, 'import', {
	value: {
		meta: {
			env: {
				VITE_API_URL: 'http://localhost:3000',
			},
		},
	},
});
