const { profitableGamble } = require("../CodeTest_07/profitableGamble");

test("CodeTest_7", () => {
	expect(profitableGamble(0.2, 50, 9)).toBe(true);
	expect(profitableGamble(0.9, 1, 2)).toBe(false);
	expect(profitableGamble(0.9, 3, 2)).toBe(true);
	expect(profitableGamble(0.33, 10, 3.3)).toBe(true);
});
