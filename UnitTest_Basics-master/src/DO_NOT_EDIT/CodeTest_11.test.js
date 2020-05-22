const { diff21 } = require("../CodeTest_11/diff21");

test("CodeTest_11 ", () => {
	expect(diff21(19)).toBe(2);
	expect(diff21(10)).toBe(11);
	expect(diff21(21)).toBe(0);
	expect(diff21(-1)).toBe(22);
	expect(diff21(2)).toBe(19);
	expect(diff21(22)).toBe(2);
	expect(diff21(-2)).toBe(23);
});
