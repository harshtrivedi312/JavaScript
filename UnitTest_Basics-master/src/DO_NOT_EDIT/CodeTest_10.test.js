const { animals } = require("../CodeTest_10/animals");

test("CodeTest_10", () => {
	expect(animals(5, 2, 8)).toBe(50);
	expect(animals(3, 4, 7)).toBe(50);
	expect(animals(1, 2, 3)).toBe(22);
	expect(animals(3, 5, 2)).toBe(34);
});
