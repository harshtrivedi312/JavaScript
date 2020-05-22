const { addition } = require("../CodeTest_03/nextInt");

test("CodeTest_3 ", () => {
	expect(addition(2)).toBe(3);
	expect(addition(-2)).toBe(-1);
	expect(addition(12)).toBe(13);
	expect(addition(20)).toBe(21);
});
