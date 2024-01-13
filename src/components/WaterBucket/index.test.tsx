import React from "react";
import { render, screen } from "@testing-library/react";
import WaterBucket from "./index";
import useBucketAnimation from "@/hooks/useBucketAnimation";
import { FILL_JUG_Y } from "@/constants/actions";

jest.mock("@/hooks/useBucketAnimation", () => ({
	__esModule: true,
	default: jest.fn(() => ({
		localAction: { jugX: 3, jugY: 5, action: "FILL_JUG_Y" },
		height: "50%",
	})),
}));

describe("WaterBucket", () => {
	const mockActions = [{ jugX: 3, jugY: 5, action: FILL_JUG_Y }];

	beforeEach(() => {
		(useBucketAnimation as jest.Mock).mockReturnValue({
			localAction: mockActions[0],
			height: "50%",
		});
	});

	test("renders the water bucket", () => {
		render(
			<WaterBucket
				capacity={{ jugX: 10, jugY: 20 }}
				isXJug={false}
				actions={mockActions}
			/>
		);
		const bucketContainer = screen.getByTestId("bucket-y-container");
		expect(bucketContainer).toBeInTheDocument();
	});

	test("renders with correct text for Jug X", () => {
		render(
			<WaterBucket
				capacity={{ jugX: 3, jugY: 5 }}
				isXJug={true}
				actions={mockActions}
			/>
		);

		const textElement = screen.getByTestId("bucket-x-label");
		expect(textElement).toBeInTheDocument();
	});

	test("renders with correct text for Jug Y", () => {
		render(
			<WaterBucket
				capacity={{ jugX: 3, jugY: 5 }}
				isXJug={false}
				actions={mockActions}
			/>
		);
		const textElement = screen.getByTestId("bucket-y-label");
		expect(textElement).toBeInTheDocument();
	});

	test("displays the correct water level based on actions", () => {
		render(
			<WaterBucket
				capacity={{ jugX: 3, jugY: 5 }}
				isXJug={false}
				actions={mockActions}
			/>
		);
		const waterDiv = screen.getByTestId("bucket-y-water");
		expect(waterDiv).toHaveStyle("height: 50%");
	});
});
