const { remainder } = require("../CodeTest_05/remainder");

test("CodeTest_5 ", () => {
	expect(remainder(7, 2)).toBe(1);
	expect(remainder(3, 4)).toBe(3);
	expect(remainder(-9, 45)).toBe(-9);
	expect(remainder(5, 5)).toBe(0);
});
