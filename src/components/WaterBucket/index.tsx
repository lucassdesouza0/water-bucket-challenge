"use client";

import { JugAction } from "@/services/jiggleSolver";
import BucketIcon from "../BucketIcon";
import useBucketAnimation from "@/hooks/useBucketAnimation";

interface WaterBucketProps {
	capacity: { jugX: number; jugY: number };
	isXJug?: boolean;
	actions: JugAction[];
}

export default function WaterBucket({
	capacity,
	isXJug = false,
	actions,
}: WaterBucketProps) {
	const { localAction, height } = useBucketAnimation({
		actions,
		isXJug,
		capacity,
	});

	const bucketStyle = `relative w-48 h-64 border-2 border-gray-300 mx-auto rounded-b-3xl hover:border-indigo-200 hover:shadow-xl`;
	const bucketInsideStyle = `absolute top-0 w-full h-full bg-white overflow-hidden h-[100%] rounded-b-3xl `;
	const waterStyle = `absolute flex flex-col justify-center bottom-0 w-full bg-indigo-300 transition-height ease-in-out duration-300 rounded-b-xl text-center`;

	const testid = isXJug ? "bucket-x" : "bucket-y";

	return (
		<div
			className="flex flex-col items-center justify-center"
			data-testid={`${testid}-container`}
		>
			<h2
				className="text-center font-normal text-2xl"
				data-testid={`${testid}-label`}
			>
				BUCKET {isXJug ? "X" : "Y"}
			</h2>
			<div className={bucketStyle}>
				<div className={bucketInsideStyle}>
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
					<BucketIcon
						action={localAction?.action!}
						isXJug={isXJug}
						className="absolute top-5 right-[30%] size-[5rem] text-black animate-pulse"
					/>
				</div>
			</div>
		</div>
	);
}
