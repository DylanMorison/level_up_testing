import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import NewMovie from "./NewMovie";

afterEach(cleanup);

test("<NewMovie/> 1", () => {
	const { debug, getByTestId } = render(<NewMovie />);

	debug();

	const newMovieText = getByTestId("newMovieId");

	expect(newMovieText.innerText).toBe("New Movie");
});
