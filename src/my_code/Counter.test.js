import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

afterEach(cleanup);

test("<Counter />", () => {
	// The "render" method renders a React Element into the dom
	const { debug, getByTestId } = render(<Counter />);

	// debug(); // Outputs dom as a string
	const counterButton = getByTestId("counter-button");

	// Asserts counter-button is a button
	expect(counterButton.tagName).toBe("BUTTON");
	// Aserts that counter-button starts at 0
	expect(counterButton.textContent).toBe("0");

	fireEvent.click(counterButton);
	expect(counterButton.textContent).toBe("1");

	fireEvent.click(counterButton);
	expect(counterButton.textContent).toBe("2");
});
