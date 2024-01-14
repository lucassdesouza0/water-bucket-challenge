"use client";

import { JugAction } from "@/services/waterJugSolver";
import JugIcon from "../JugIcon";
import useJugAnimation from "@/hooks/useJugAnimation";

interface WaterJugProps {
	capacity: { jugX: number; jugY: number };
	isXJug?: boolean;
	actions: JugAction[];
}

export default function WaterJug({
	capacity,
	isXJug = false,
	actions,
}: WaterJugProps) {
	const { localAction, height } = useJugAnimation({
		actions,
		isXJug,
		capacity,
	});

	console.log("actions", actions);

	const jugStyle = `relative w-48 h-64 border-2 border-gray-300 mx-auto rounded-b-3xl hover:border-indigo-200 hover:shadow-xl`;
	const jugInsideStyle = `absolute top-0 w-full h-full bg-white overflow-hidden h-[100%] rounded-b-3xl `;
	const waterStyle = `absolute flex flex-col justify-center bottom-0 w-full bg-indigo-300 transition-height ease-in-out duration-300 rounded-b-xl text-center`;

	const testid = isXJug ? "jug-x" : "jug-y";

	return (
		<div
			className="flex flex-col items-center justify-center"
			data-testid={`${testid}-container`}
		>
			<h2
				className="text-center font-normal text-2xl"
				data-testid={`${testid}-label`}
			>
				JUG {isXJug ? "X" : "Y"}
			</h2>
			<div className={jugStyle}>
				<div className={jugInsideStyle}>
					<div
						className={waterStyle}
						style={{
							height: height,
						}}
						data-testid={`${testid}-water`}
					>
						<span className="text-center text-white font-bold text-4xl">
							{isXJug ? localAction?.jugX : localAction?.jugY}
						</span>
					</div>
					<JugIcon
						action={localAction?.action!}
						isXJug={isXJug}
						className="absolute top-5 right-[30%] size-[5rem] text-black animate-pulse"
					/>
				</div>
			</div>
		</div>
	);
}
