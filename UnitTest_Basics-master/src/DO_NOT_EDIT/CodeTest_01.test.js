const { addition } = require("../CodeTest_01/addition");

test("CodeTest_1 ", () => {
	expect(addition(2, 3)).toBe(5);
	expect(addition(-2, -3)).toBe(-5);
	expect(addition(12, 13)).toBe(25);
	expect(addition(20, 30)).toBe(50);
});
