const StyleDictionary = require('style-dictionary').extend('config.json');

/**
 * Helper: Transforms dimensions to px
 */
function transformDimension(value) {
	if (value.toString().endsWith('px')) {
		return value;
	}
	return value + 'px';
}
/**
 * Transform fontSizes to px
 */
StyleDictionary.registerTransform({
	name: 'size/px',
	type: 'value',
	transitive: true,
	matcher: (token) =>
		[
			'fontSizes',
			'dimension',
			'borderRadius',
			'borderWidth',
			'spacing',
		].includes(token.type),
	transformer: (token) => transformDimension(token.value),
});

StyleDictionary.buildAllPlatforms();
