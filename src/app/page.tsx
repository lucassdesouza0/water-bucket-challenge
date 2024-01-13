"use client";

import Form from "@/components/Form";
import WaterBucket from "@/components/WaterBucket";
import { useActionsContext } from "./contexts/actions";
import jiggleSolver from "@/services/jiggleSolver";

export default function Home() {
	const { actions, bucketCapacity, setBucketCapacity, setActions } =
		useActionsContext();

	const handleFormSubmit = (jugX: number, jugY: number, target: number) => {
		setBucketCapacity({ jugX, jugY });
		const result = jiggleSolver(jugX, jugY, target);
		if (result) {
			setActions(result);
		}
	};

	return (
		<div className="flex flex-col justify-center items-center shadow-lg h-[80vh] w-[60vw] m-auto p-20 bg-indigo-50 gap-8 text-xl rounded-lg">
			<h1 className="text-5xl text-gray-800 font-normal">
				WATER BUCKET RIDDLE
			</h1>

			<Form onFormSubmit={handleFormSubmit} />
			<div className="flex flex-row gap-8">
				<WaterBucket isXJug capacity={bucketCapacity} actions={actions} />
				<WaterBucket capacity={bucketCapacity} actions={actions} />
			</div>
		</div>
	);
}
