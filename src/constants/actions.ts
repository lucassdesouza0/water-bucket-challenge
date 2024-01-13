export type ActionKey =
	| "FILL_JUG_X"
	| "FILL_JUG_Y"
	| "EMPTY_JUG_X"
	| "EMPTY_JUG_Y"
	| "TRANSFER_JUG_X_TO_Y"
	| "TRANSFER_JUG_Y_TO_X";

type ActionsCopyType = Record<ActionKey, string>;

const FILL_JUG_X: ActionKey = "FILL_JUG_X";
const FILL_JUG_Y: ActionKey = "FILL_JUG_Y";
const EMPTY_JUG_X: ActionKey = "EMPTY_JUG_X";
const EMPTY_JUG_Y: ActionKey = "EMPTY_JUG_Y";
const TRANSFER_JUG_X_TO_Y: ActionKey = "TRANSFER_JUG_X_TO_Y";
const TRANSFER_JUG_Y_TO_X: ActionKey = "TRANSFER_JUG_Y_TO_X";

const getActionsCopy: ActionsCopyType = {
	FILL_JUG_X: "Fill Jug X",
	FILL_JUG_Y: "Fill Jug Y",
	EMPTY_JUG_X: "Empty Jug X",
	EMPTY_JUG_Y: "Empty Jug Y",
	TRANSFER_JUG_X_TO_Y: "Transfer Jug X to Y",
	TRANSFER_JUG_Y_TO_X: "Transfer Jug Y to X",
};

export {
	FILL_JUG_X,
	FILL_JUG_Y,
	EMPTY_JUG_X,
	EMPTY_JUG_Y,
	TRANSFER_JUG_X_TO_Y,
	TRANSFER_JUG_Y_TO_X,
	getActionsCopy,
};
