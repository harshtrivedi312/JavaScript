const { howManySeconds } = require("../CodeTest_06/howManySeconds");

test("CodeTest_6 ", () => {
	expect(howManySeconds(2)).toBe(7200);
	expect(howManySeconds(10)).toBe(36000);
	expect(howManySeconds(24)).toBe(86400);
	expect(howManySeconds(36)).toBe(129600);
});
