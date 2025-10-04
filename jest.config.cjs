import { createDefaultPreset } from "ts-jest";

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} */
export default {
  preset: 'ts-jest/presets/default-esm',  // ✅ ESM support
  testEnvironment: "jsdom",                // ✅ Ripple uses DOM
  extensionsToTreatAsEsm: ['.ts', '.tsx'], // ✅ important for ESM
  transform: {
    ...tsJestTransformCfg,
  },
  globals: {
    'ts-jest': {
      useESM: true,                       // ✅ compile TypeScript as ESM
      tsconfig: 'tsconfig.json'
    }
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleNameMapper: {
    // optional: if ripple uses JSX import source mapping
    '^ripple(.*)$': '<rootDir>/node_modules/ripple$1',
  },
};
