const { nearHundred } = require("../CodeTest_12/nearHundred");

test("CodeTest_12 ", () => {
	expect(nearHundred(89)).toBe(false);
	expect(nearHundred(111)).toBe(false);
	expect(nearHundred(110)).toBe(true);
	expect(nearHundred(-209)).toBe(false);
});
