import { average, mapEnumArray, mapEnumValue } from '../utils/Preprocessor/mapping';

test('Array Average', () => {
	const array = [1, 2, 3, 4, 5];
	expect(average(array)).toBe(3);
});

test('Map Enum Value', () => {
	const enumObj = {
		test: 1,
		test2: 2,
		test3: 3,
	};
	expect(mapEnumValue(enumObj, 'test', 0)).toBe(1);
	expect(mapEnumValue(enumObj, 'test2', 0)).toBe(2);
	expect(mapEnumValue(enumObj, 'test3', 0)).toBe(3);
});

test('Map Enum Array', () => {
	const enumObj = {
		test: 1,
		test2: 2,
		test3: 3,
	};
	expect(mapEnumArray(enumObj, ['test', 'test2', 'test3'], 0)).toBe(2);
});
