module.exports = {
    root: true,
    env: {
        browser: true,
        es2025: true,
        node: true,
        jest: true, // for tests
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2025,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // TypeScript rules
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:prettier/recommended', // Integrate Prettier
    ],
    plugins: ['@typescript-eslint', 'import', 'prettier'],
    rules: {
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
        'no-console': 'warn', // warn on console.log
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['warn'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'import/order': [
            'warn',
            {
                groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index'],
                'newlines-between': 'always',
            },
        ],
    },
    settings: {
        'import/resolver': {
            typescript: {}, // this loads <rootdir>/tsconfig.json
        },
    },
};
