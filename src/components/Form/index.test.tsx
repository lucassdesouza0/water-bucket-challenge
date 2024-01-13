import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./index";

describe("Form", () => {
	const mockOnFormSubmit = jest.fn();

	beforeEach(() => {
		render(<Form onFormSubmit={mockOnFormSubmit} />);
	});

	test("renders the form", () => {
		expect(screen.getByTestId("form")).toBeInTheDocument();
	});

	test("allows input for Jug X capacity", () => {
		const inputX = screen.getByTestId("jugX-input");
		fireEvent.change(inputX, { target: { value: "3" } });
		expect(inputX).toHaveValue("3");
	});

	test("allows input for Jug Y capacity", () => {
		const inputY = screen.getByTestId("jugY-input");
		fireEvent.change(inputY, { target: { value: "5" } });
		expect(inputY).toHaveValue("5");
	});

	test("allows input for target amount", () => {
		const inputTarget = screen.getByTestId("target-input");
		fireEvent.change(inputTarget, { target: { value: "4" } });
		expect(inputTarget).toHaveValue("4");
	});

	test("submits the form with correct values", () => {
		const inputX = screen.getByTestId("jugX-input");
		const inputY = screen.getByTestId("jugY-input");
		const inputTarget = screen.getByTestId("target-input");
		const submitButton = screen.getByTestId("submit-button");

		fireEvent.change(inputX, { target: { value: "3" } });
		fireEvent.change(inputY, { target: { value: "5" } });
		fireEvent.change(inputTarget, { target: { value: "4" } });
		fireEvent.click(submitButton);

		expect(mockOnFormSubmit).toHaveBeenCalledWith(3, 5, 4);
	});
});
