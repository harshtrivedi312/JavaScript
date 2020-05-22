const { middleWay } = require("../CodeTest_17/middleWay");

test("CodeTest_17", () => {
	expect(middleWay([1, 2, 3], [4, 5, 6])).toEqual(
		expect.arrayContaining([2, 5])
	);
	expect(middleWay([7, 7, 7], [3, 8, 0])).toEqual(
		expect.arrayContaining([7, 8])
	);
	expect(middleWay([5, 2, 9], [1, 4, 5])).toEqual(
		expect.arrayContaining([2, 4])
	);
});
