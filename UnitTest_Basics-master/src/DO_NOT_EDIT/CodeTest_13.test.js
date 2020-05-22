const { in1020 } = require("../CodeTest_13/in1020");
test("CodeTest_13 ", () => {
	expect(in1020(8, 99)).toBe(false);
	expect(in1020(21, 21)).toBe(false);
	expect(in1020(12, 99)).toBe(true);
	expect(in1020(9, 9)).toBe(false);
	expect(in1020(21, 12)).toBe(true);
	expect(in1020(20, 20)).toBe(true);
});
