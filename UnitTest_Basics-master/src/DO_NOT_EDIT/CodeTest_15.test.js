const { arrayCount9 } = require("../CodeTest_15/arrayCount9");

test("CodeTest_15 ", () => {
	expect(arrayCount9([1, 2, 9])).toBe(1);
	expect(arrayCount9([1, 9, 9])).toBe(2);
	expect(arrayCount9([1, 9, 9, 3, 9])).toBe(3);
	expect(arrayCount9([4, 2, 4, 3, 1])).toBe(0);
	expect(arrayCount9([4, 2, 4, 3, 9])).toBe(1);
});
