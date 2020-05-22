const { has23 } = require("../CodeTest_16/has23");

test("CodeTest_15 ", () => {
	expect(has23([2, 5])).toBe(true);
	expect(has23([4, 3])).toBe(true);
	expect(has23([4, 5])).toBe(false);
	expect(has23([2, 2])).toBe(true);
	expect(has23([3, 2])).toBe(true);
});
