const { dividesEvenly } = require("../CodeTest_08/dividesEvenly");

test("CodeTest_8", () => {
	expect(dividesEvenly(98, 7)).toBe(true);
	expect(dividesEvenly(87, 49)).toBe(false);
	expect(dividesEvenly(34, 14)).toBe(false);
	expect(dividesEvenly(78, 6)).toBe(true);
	expect(dividesEvenly(74, 7)).toBe(false);
	expect(dividesEvenly(87, 29)).toBe(true);
	expect(dividesEvenly(48, 24)).toBe(true);
	expect(dividesEvenly(99, 20)).toBe(false);
	expect(dividesEvenly(98, 49)).toBe(true);
	expect(dividesEvenly(100, 6)).toBe(false);
});
