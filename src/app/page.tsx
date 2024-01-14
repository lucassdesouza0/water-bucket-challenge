"use client";

import Form from "@/components/Form";
import WaterJug from "@/components/WaterJug";
import { useActionsContext } from "./contexts/actions";
import waterJugSolver from "@/services/waterJugSolver";
import { useState } from "react";

export default function Home() {
	const [noSolution, setNoSolution] = useState(false);
	const { actions, jugCapacity, setJugCapacity, setActions } =
		useActionsContext();

	const handleFormSubmit = (jugX: number, jugY: number, target: number) => {
		setJugCapacity({ jugX, jugY });
		const result = waterJugSolver(jugX, jugY, target);
		if (result) {
			setNoSolution(false);
			setActions(result);
		} else {
			setNoSolution(true);
		}
	};

	return (
		<div className="flex flex-col justify-center items-center shadow-lg h-[80vh] w-[60vw] m-auto p-20 bg-indigo-50 gap-8 text-xl rounded-lg">
			<h1 className="text-5xl text-gray-800 font-normal">WATER JUG RIDDLE</h1>

			<Form onFormSubmit={handleFormSubmit} />
			{noSolution ? (
				<div className="w-100 h-60 p-8">
					<p className="rounded-lg bg-red-500 text-white font-bold p-4">
						No solution found
					</p>
				</div>
			) : (
				<div className="flex flex-row gap-8">
					<WaterJug isXJug capacity={jugCapacity} actions={actions} />
					<WaterJug capacity={jugCapacity} actions={actions} />
				</div>
			)}
		</div>
	);
}
