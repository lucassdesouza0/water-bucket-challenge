import {
	FILL_JUG_X,
	FILL_JUG_Y,
	EMPTY_JUG_X,
	EMPTY_JUG_Y,
	TRANSFER_JUG_X_TO_Y,
	TRANSFER_JUG_Y_TO_X,
	ActionKey,
} from "@/constants/actions";
import greatCommomDivisor from "@/utils/gcd";

export type JugAction = {
	jugX: number;
	jugY: number;
	action: ActionKey;
};

/**
 * Solves the water jug problem using a breadth-first search algorithm.
 * The function finds a sequence of actions to measure a specific target
 * amount of water using two jugs of fixed capacities.
 *
 * @param jugX The capacity of the first jug.
 * @param jugY The capacity of the second jug.
 * @param target The target amount of water to measure.
 * @returns An array of actions (represented as action objects) to achieve the target amount,
 *          or `false` if the target amount cannot be achieved with the given jug capacities.
 */

export default function waterJugSolver(
	jugX: number,
	jugY: number,
	target: number
): JugAction[] | false {
	if (target % greatCommomDivisor(jugX, jugY) !== 0) {
		return false;
	}

	if (target > Math.max(jugX, jugY) || Math.min(jugX, jugY) <= 0) {
		return false;
	}

	let visited: Set<string> = new Set();
	let queue: Array<[number, number, JugAction[]]> = [[0, 0, []]];

	while (queue.length > 0) {
		let [x, y, steps] = queue.shift()!;
		if (x === target || y === target) {
			return steps;
		}

		let possibleActions: Array<[number, number, ActionKey]> = [
			[jugX, y, FILL_JUG_X],
			[0, y, EMPTY_JUG_X],
			[x, jugY, FILL_JUG_Y],
			[x, 0, EMPTY_JUG_Y],
			transfer(x, y, jugX, jugY),
			transfer(y, x, jugY, jugX, true),
		];

		for (let [newX, newY, action] of possibleActions) {
			let actionKey: string = `${newX},${newY}`;
			if (!visited.has(actionKey)) {
				visited.add(actionKey);
				queue.push([
					newX,
					newY,
					[...steps, { jugX: newX, jugY: newY, action }],
				]);
			}
		}
	}

	return false;
}

function transfer(
	from: number,
	to: number,
	maxFrom: number,
	maxTo: number,
	reverse: boolean = false
): [number, number, ActionKey] {
	let transferAmount: number = Math.min(from, maxTo - to);
	if (reverse) {
		return [to + transferAmount, from - transferAmount, TRANSFER_JUG_Y_TO_X];
	}
	return [from - transferAmount, to + transferAmount, TRANSFER_JUG_X_TO_Y];
}
