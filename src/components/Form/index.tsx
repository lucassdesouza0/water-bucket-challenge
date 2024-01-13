import React, { useState } from "react";

interface FormProps {
	onFormSubmit: (jugX: number, jugY: number, target: number) => void;
}

export default function Form({ onFormSubmit }: FormProps) {
	const [jugX, setJugX] = useState<number>();
	const [jugY, setJugY] = useState<number>();
	const [target, setTarget] = useState<number>();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onFormSubmit(jugX!, jugY!, target!);
	};

	return (
		<div className="flex items-center justify-center ">
			<form
				onSubmit={handleSubmit}
				className="p-6 rounded-lg space-y-4 items-center flex flex-col gap-4"
				data-testid="form"
			>
				<div className="flex items-center space-x-4">
					<label className="text-black" htmlFor="jugX">
						Jug X Capacity:
						<input
							id="jugX"
							data-testid="jugX-input"
							className=" p-4 rounded-lg drop-shadow-xl border-2 border-gray-200 appearance-none"
							value={jugX}
							onChange={(e) => setJugX(Number(e.target.value))}
						/>
					</label>
					<label className="text-black" htmlFor="jugY">
						Jug Y Capacity:
						<input
							id="jugY"
							data-testid="jugY-input"
							className=" p-4 rounded-lg drop-shadow-xl border-2 border-gray-200 appearance-none"
							value={jugY}
							onChange={(e) => setJugY(Number(e.target.value))}
						/>
					</label>
					<label className="text-black" htmlFor="target">
						Target Amount:
						<input
							id="target"
							data-testid="target-input"
							className=" p-4 rounded-lg drop-shadow-xl border-2 border-gray-200 appearance-none"
							value={target}
							onChange={(e) => setTarget(Number(e.target.value))}
						/>
					</label>
				</div>
				<button
					type="submit"
					data-testid="submit-button"
					className="w-80 bg-black text-white p-4 rounded-xl drop-shadow-xl hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
				>
					Solve
				</button>
			</form>
		</div>
	);
}
