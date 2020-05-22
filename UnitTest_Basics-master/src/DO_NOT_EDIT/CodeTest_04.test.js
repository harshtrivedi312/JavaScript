const { lessThan100 } = require("../CodeTest_04/lessThan100");

test("CodeTest_3 ", () => {
	expect(lessThan100(5, 57)).toBe(true);
	expect(lessThan100(77, 30)).toBe(false);
	expect(lessThan100(0, 59)).toBe(true);
	expect(lessThan100(78, 35)).toBe(false);
});
