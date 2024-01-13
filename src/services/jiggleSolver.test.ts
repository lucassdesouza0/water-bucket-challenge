import waterJugSolver from "./jiggleSolver";

const largeNumbers = [
	{ action: "FILL_JUG_Y", jugX: 0, jugY: 2000 },
	{ action: "TRANSFER_JUG_Y_TO_X", jugX: 10, jugY: 1990 },
	{ action: "EMPTY_JUG_X", jugX: 0, jugY: 1990 },
	{ action: "TRANSFER_JUG_Y_TO_X", jugX: 10, jugY: 1980 },
	{ action: "EMPTY_JUG_X", jugX: 0, jugY: 1980 },
	{ action: "TRANSFER_JUG_Y_TO_X", jugX: 10, jugY: 1970 },
	{ action: "EMPTY_JUG_X", jugX: 0, jugY: 1970 },
	{ action: "TRANSFER_JUG_Y_TO_X", jugX: 10, jugY: 1960 },
	{ action: "EMPTY_JUG_X", jugX: 0, jugY: 1960 },
	{ action: "TRANSFER_JUG_Y_TO_X", jugX: 10, jugY: 1950 },
	{ action: "EMPTY_JUG_X", jugX: 0, jugY: 1950 },
	{ action: "TRANSFER_JUG_Y_TO_X", jugX: 10, jugY: 1940 },
	{ action: "EMPTY_JUG_X", jugX: 0, jugY: 1940 },
	{ action: "TRANSFER_JUG_Y_TO_X", jugX: 10, jugY: 1930 },
	{ action: "EMPTY_JUG_X", jugX: 0, jugY: 1930 },
	{ action: "TRANSFER_JUG_Y_TO_X", jugX: 10, jugY: 1920 },
	{ action: "EMPTY_JUG_X", jugX: 0, jugY: 1920 },
	{ action: "TRANSFER_JUG_Y_TO_X", jugX: 10, jugY: 1910 },
	{ action: "EMPTY_JUG_X", jugX: 0, jugY: 1910 },
	{ action: "TRANSFER_JUG_Y_TO_X", jugX: 10, jugY: 1900 },
];

describe("waterJugSolver Tests", () => {
	test("Basic functionality with a solvable scenario", () => {
		const basicSolution = [
			{ jugX: 0, jugY: 5, action: "FILL_JUG_Y" },
			{ jugX: 3, jugY: 2, action: "TRANSFER_JUG_Y_TO_X" },
			{ jugX: 0, jugY: 2, action: "EMPTY_JUG_X" },
			{ jugX: 2, jugY: 0, action: "TRANSFER_JUG_Y_TO_X" },
			{ jugX: 2, jugY: 5, action: "FILL_JUG_Y" },
			{ jugX: 3, jugY: 4, action: "TRANSFER_JUG_Y_TO_X" },
		];
		expect(waterJugSolver(3, 5, 4)).toEqual(basicSolution);
	});

	test("Basic functionality with a solvable scenario 2", () => {
		const basicSolution = [
			{ jugX: 2, jugY: 0, action: "FILL_JUG_X" },
			{ jugX: 0, jugY: 2, action: "TRANSFER_JUG_X_TO_Y" },
			{ jugX: 2, jugY: 2, action: "FILL_JUG_X" },
			{ jugX: 0, jugY: 4, action: "TRANSFER_JUG_X_TO_Y" },
		];
		expect(waterJugSolver(2, 10, 4)).toEqual(basicSolution);
	});

	test("Returns false for an unsolvable scenario", () => {
		expect(waterJugSolver(2, 6, 5)).toBe(false);
	});

	test("Basic functionality with a solvable scenario 3", () => {
		const basicSolution = [
			{ jugX: 0, jugY: 100, action: "FILL_JUG_Y" },
			{ jugX: 2, jugY: 98, action: "TRANSFER_JUG_Y_TO_X" },
			{ jugX: 0, jugY: 98, action: "EMPTY_JUG_X" },
			{ jugX: 2, jugY: 96, action: "TRANSFER_JUG_Y_TO_X" },
		];
		expect(waterJugSolver(2, 100, 96)).toEqual(basicSolution);
	});

	test("Returns false for an unsolvable scenario", () => {
		expect(waterJugSolver(2, 6, 5)).toBe(false);
	});

	test("Handles large numbers efficiently", () => {
		expect(waterJugSolver(10, 2000, 1900)).toEqual(largeNumbers);
	});

	test("Returns false for edge case with zero capacity", () => {
		expect(waterJugSolver(0, 5, 5)).toBe(false);
	});

	test("Returns false for negative jug capacity", () => {
		expect(waterJugSolver(3, -5, 1)).toBe(false);
	});

	test("Handles cases where both jugs have the same size", () => {
		const equalSizeSolution = [{ jugX: 5, jugY: 0, action: "FILL_JUG_X" }];
		expect(waterJugSolver(5, 5, 5)).toEqual(equalSizeSolution);
	});

	test("Target size equal to one of the jugs", () => {
		const targetEqualJugSize = [{ jugX: 3, jugY: 0, action: "FILL_JUG_X" }];
		expect(waterJugSolver(3, 4, 3)).toEqual(targetEqualJugSize);
	});

	test("Returns false when target is larger than both jugs", () => {
		expect(waterJugSolver(3, 5, 10)).toBe(false);
	});

	test("Handles a target of zero", () => {
		const targetZeroSolution: [] = [];
		expect(waterJugSolver(3, 5, 0)).toEqual(targetZeroSolution);
	});
});
