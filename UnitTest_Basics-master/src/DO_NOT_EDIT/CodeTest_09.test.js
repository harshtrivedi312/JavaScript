const { checkEquality } = require("../CodeTest_09/checkEquality");

test("CodeTest_9", () => {
	expect(checkEquality(1, true)).toBe(false);
	expect(checkEquality(0, "0")).toBe(false);
	expect(checkEquality(1, 1)).toBe(true);
	expect(checkEquality(0, "")).toBe(false);
	expect(checkEquality(1, "1")).toBe(false);
	expect(checkEquality(0, false)).toBe(false);
	expect(checkEquality(null, undefined)).toBe(false);
	expect(checkEquality(undefined, undefined)).toBe(true);
	expect(checkEquality(false, null)).toBe(false);
});
