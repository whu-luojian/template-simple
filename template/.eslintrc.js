module.exports = {
	env: {
		es6: true,
    node: true,
    browser: true
	},
	extends: [
		'plugin:@typescript-eslint/recommended'
	],
	parser: '@typescript-eslint/parser',
	rules: {
		'no-param-reassign': 'off',
		'max-params': 'off',
		'semi': ['error', 'never'],
		'no-empty': 'off',
		'eol-last': 'error',
		'object-curly-spacing': ['error', 'always']
	},
	ignorePatterns: ['/node_modules']
}
