import { JugAction } from "@/services/waterJugSolver";
import { useEffect, useState } from "react";

interface UseJugAnimationProps {
	actions: JugAction[];
	isXJug: boolean;
	capacity: { jugX: number; jugY: number };
}

/**
 * Custom hook for managing the animation of water level in a jug.
 *
 * This hook sets up an interval to update the local action state based on
 * a sequence of actions. Each action updates the height of the water in
 * the jug to visually represent the current state of the water jug problem.
 * The hook handles the timing of these updates to create a step-by-step animation.
 *
 * @param actions An array of JugAction objects representing the sequence of actions
 *                to be animated.
 * @param isXJug A boolean indicating whether the current jug is 'X' or 'Y'.
 *               This determines which jug's state (jugX or jugY) to use for the animation.
 * @param capacity An object containing the capacities of the jugs (jugX and jugY).
 *                       Used to calculate the relative height of water in the jug.
 *
 * @returns An object containing the current action (`localAction`) and the calculated
 *          height of the water (`height`) for the current step of the animation.
 */

export default function useJugAnimation({
	actions,
	isXJug,
	capacity,
}: UseJugAnimationProps): { localAction: JugAction; height: string } {
	const [localAction, setLocalAction] = useState<JugAction>(actions[0]);

	useEffect(() => {
		let interval: NodeJS.Timeout;
		if (actions.length > 0) {
			let currentStep = 0;
			interval = setInterval(() => {
				if (currentStep >= actions.length) {
					clearInterval(interval);
					return;
				}
				setLocalAction(actions[currentStep]);
				currentStep++;
			}, 1000);
		}
		return () => clearInterval(interval);
	}, [actions]);

	const height = isXJug
		? `${((localAction?.jugX || 0) / capacity.jugX) * 100}%`
		: `${((localAction?.jugY || 0) / capacity.jugY) * 100}%`;

	return { localAction, height };
}
