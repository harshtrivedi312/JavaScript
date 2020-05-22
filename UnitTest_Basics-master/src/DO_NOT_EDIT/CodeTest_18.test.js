const { commonEnd } = require("../CodeTest_18/commonEnd");

test("CodeTest_18", () => {
	expect(commonEnd([1, 2, 3], [7, 3])).toBe(true);
	expect(commonEnd([1, 2, 3], [7, 3, 2])).toBe(false);
	expect(commonEnd([1, 2, 3], [1, 3])).toBe(true);
	expect(commonEnd([1, 2, 3], [1])).toBe(true);
	expect(commonEnd([1, 2, 3], [2])).toBe(false);
});
