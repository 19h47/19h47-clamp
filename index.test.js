import clamp from './index.js';

const tests = [
	[0, -100, 100, 0],
	[0, 100, 100, 100],
	[0, 100, -100, 0],
	[100, 0, 50, 50],
	[50, 100, 150, 100],
	[-100, -50, -150, -100],
	[100, -50, -150, -50],
	[-200, -50, -150, -150],
];

test.each(tests)('clamp %i between %i and %i equals %i', (value, min, max, expected) => {
	expect(clamp(value, min, max)).toBe(expected);
});
