const { backAround } = require("../CodeTest_14/backAround");

test("CodeTest_14 ", () => {
	expect(backAround("cat")).toBe("tcatt");
	expect(backAround("Hello")).toBe("oHelloo");
	expect(backAround("a")).toBe("aaa");
	expect(backAround("read")).toBe("dreadd");
});
