import React from "react";
import { render, screen } from "@testing-library/react";
import WaterJug from "./index";
import useJugAnimation from "@/hooks/useBucketAnimation";
import { FILL_JUG_Y } from "@/constants/actions";

jest.mock("@/hooks/useJugAnimation", () => ({
	__esModule: true,
	default: jest.fn(() => ({
		localAction: { jugX: 3, jugY: 5, action: "FILL_JUG_Y" },
		height: "50%",
	})),
}));

describe("WaterJug", () => {
	const mockActions = [{ jugX: 3, jugY: 5, action: FILL_JUG_Y }];

	beforeEach(() => {
		(useJugAnimation as jest.Mock).mockReturnValue({
			localAction: mockActions[0],
			height: "50%",
		});
	});

	test("renders the water jug", () => {
		render(
			<WaterJug
				capacity={{ jugX: 10, jugY: 20 }}
				isXJug={false}
				actions={mockActions}
			/>
		);
		const jugContainer = screen.getByTestId("jug-y-container");
		expect(jugContainer).toBeInTheDocument();
	});

	test("renders with correct text for Jug X", () => {
		render(
			<WaterJug
				capacity={{ jugX: 3, jugY: 5 }}
				isXJug={true}
				actions={mockActions}
			/>
		);

		const textElement = screen.getByTestId("jug-x-label");
		expect(textElement).toBeInTheDocument();
	});

	test("renders with correct text for Jug Y", () => {
		render(
			<WaterJug
				capacity={{ jugX: 3, jugY: 5 }}
				isXJug={false}
				actions={mockActions}
			/>
		);
		const textElement = screen.getByTestId("jug-y-label");
		expect(textElement).toBeInTheDocument();
	});

	test("displays the correct water level based on actions", () => {
		render(
			<WaterJug
				capacity={{ jugX: 3, jugY: 5 }}
				isXJug={false}
				actions={mockActions}
			/>
		);
		const waterDiv = screen.getByTestId("jug-y-water");
		expect(waterDiv).toHaveStyle("height: 50%");
	});
});
