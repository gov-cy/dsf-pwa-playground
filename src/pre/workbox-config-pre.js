module.exports = {
	globDirectory: 'docs/pre/',
	globPatterns: [
		'**/*.{css,png,ico,gif,html,json}'
	],
	cacheId : 'pre1',
	swDest: 'docs/pre/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};